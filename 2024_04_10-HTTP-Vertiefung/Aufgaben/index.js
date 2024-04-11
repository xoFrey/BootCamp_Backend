const http = require("http");
const { readFile } = require("./filesystem.js");
const fs = require("fs");

const errorPage = fs.readFileSync("./assets/pages/error.html");

const server = http.createServer((request, response) => {
  console.log(request.method, request.url);

  const onlyOneSegment = () => {
    return request.url.split("/").slice(1).length === 1;
  };

  const interpretAsHTMLPage = () => {
    return request.url.includes("htm")
      ? `./assets/pages/${request.url}`
      : `./assets/pages/${request.url}.html`;
  };

  const filePath =
    request.url === "/"
      ? "./assets/pages/home.html"
      : onlyOneSegment()
      ? interpretAsHTMLPage()
      : `./assets/${request.url}`;

  readFile(filePath)
    .then((data) => {
      response.write(data);
      response.end();
    })
    .catch((err) => {
      const FILE_NOT_FOUND = "ENOENT";
      if (err.code === FILE_NOT_FOUND) {
        response.writeHead(404);
        response.write(errorPage);
      } else {
        response.writeHead(500);
        console.log(err);
      }
      response.end(errorPage);
    });
});

const PORT = 9000;
server.listen(PORT, () => console.log("Server is up", PORT));

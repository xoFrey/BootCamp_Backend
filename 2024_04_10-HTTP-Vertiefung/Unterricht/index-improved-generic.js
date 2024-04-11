const fs = require("fs");
const { readFile } = require("./filesytem.js");
const http = require("http");

// laden error page synchron => bis sie nicht geladen ist, startet der server nicht
// => wenn das laden scheitert, bekommt man die errorpage
const errorPage = fs.readFileSync("./public/pages/error.html");

const server = http.createServer((request, response) => {
  console.log("New request:", request.method, request.url);

  // request.url example = /css/styles.css ||  /pages/home.html = /
  //  /css/styles.css => ./public/css/styles.css
  //  / => ./public/pages/home.html

  if (request.method !== "GET") {
    response.end(errorPage);
    return;
  }

  const filePath =
    request.url === "/" || request.url === "/home"
      ? `./public/pages/home.html`
      : `./public${request.url}`;

  readFile(filePath)
    .then((data) => {
      response.write(data);
      response.end();
    })
    .catch((err) => {
      console.log(err);
      response.end();
    });
});

const PORT = 3003;
server.listen(PORT, () => console.log("Server ready at", PORT));

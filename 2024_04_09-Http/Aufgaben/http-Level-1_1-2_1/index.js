const http = require("http");
const { readFile } = require("./filesystem.js");
const { rejects } = require("assert");

const server = http.createServer((request, response) => {
  console.log(request.method, request.url);

  if (request.method === "GET") {
    switch (request.url) {
      case "/":
        readFile("./assets/pages/home.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/about":
        readFile("./assets/pages/about.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/contact":
        readFile("./assets/pages/contact.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/faq":
        readFile("./assets/pages/faq.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/style.css":
        readFile("./assets/css/style.css")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      default:
        readFile("./assets/pages/error.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
    }
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log("Server is ready!", PORT));

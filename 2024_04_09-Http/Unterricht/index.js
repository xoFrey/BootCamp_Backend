const http = require("http");
const { readFile } = require("./filesytem.js");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("new request", request.method, request.url);

  if (
    request.method === "GET" &&
    (request.url === "/" || request.url === "/home")
  ) {
    readFile("./pages/home.html")
      .then((data) => {
        response.write(data);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/about") {
    readFile("./pages/about.html")
      .then((data) => {
        response.write(data);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.methode === "GET" || request.url === "/styles.css") {
    readFile("./css/styles.css")
      .then((data) => {
        response.write(data);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else {
    readFile("./pages/error.html")
      .then((data) => {
        response.write(data);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  }
}); // server hat einen requestListener (requestHandler)

const PORT = 9000; // 0-65536  Port nummern localhost:5500 etc

server.listen(PORT, () => console.log("server ready at port", PORT));

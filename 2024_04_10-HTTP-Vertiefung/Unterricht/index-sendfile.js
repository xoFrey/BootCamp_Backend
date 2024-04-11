const http = require("http");
const { readFile } = require("./filesytem.js");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("new request", request.method, request.url);

  const sendFile = (path) => {
    readFile(path)
      .then((data) => {
        response.write(data);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  };

  // if (
  //   request.method === "GET" &&
  //   (request.url === "/" || request.url === "/home")
  // ) {
  //   sendFile("./pages/home.html");
  // } else if (request.method === "GET" && request.url === "/about") {
  //   sendFile("./pages/about.html");
  // } else if (request.methode === "GET" || request.url === "/styles.css") {
  //   sendFile("./css/styles.css");
  // } else {
  //   sendFile("./pages/error.html");
  // }

  if (request.method === "GET") {
    switch (request.url) {
      case "/":
        sendFile("./pages/home.html");
        break;
      case "/home":
        sendFile("./pages/home.html");
        break;
      case "/about":
        sendFile("./pages/about.html");
        break;
      case "/styles.css":
        sendFile("./pages/error.html");
        break;
    }
  }
});

const PORT = 9000;

server.listen(PORT, () => console.log("server ready at port", PORT));

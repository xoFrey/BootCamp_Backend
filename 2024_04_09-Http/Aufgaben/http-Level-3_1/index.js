const http = require("http");
const { readFile } = require("./filesystem.js");

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
      case "/home":
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
      case "/howitworks":
        readFile("./assets/pages/howitworks.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/categories":
        readFile("./assets/pages/categories.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/testimony":
        readFile("./assets/pages/testimony.html")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/home.css":
        readFile("./assets/css/home.css")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/about.css":
        readFile("./assets/css/about.css")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/categories.css":
        readFile("./assets/css/categories.css")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/howitworks.css":
        readFile("./assets/css/howitworks.css")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/testimony.css":
        readFile("./assets/css/testimony.css")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/coffetable-home.png":
        readFile("./assets/img/coffetable-home.png")
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((err) => {
            console.log(err);
            response.end("Internal Server Error");
          });
        break;
      case "/bg-home.png":
        readFile("./assets/img/bg-home.png")
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

const PORT = 9000;
server.listen(PORT, () => console.log("Server is up", PORT));

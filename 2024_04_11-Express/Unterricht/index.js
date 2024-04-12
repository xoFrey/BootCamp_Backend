import express from "express";
import url from "url";
import path from "path";
import { readFile } from "./filesystem.js";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();

app.use((req, _, next) => {
  console.log("new request:", req.method, req.url);
  next();
});

// static file middleware => genau wie der generic file server von vorher
app.use(express.static("public")); // static file server => exposed all available files in public folder
// http://localhost:2002/img/bg-home.png

//  mit app use  dynamische pages

app.use((req, res, next) => {
  const filePath = __dirname + "/public/pages" + req.url + ".html";
  readFile(filePath)
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch(() => next());
});

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});

app.get("/hallo", (_, res) => {
  res.send("Hallo !!!");
});

app.patch("/hallo", (_, res) => {
  res.send("hi");
});

// Fallback handler => for endpoints that dont match
app.use((_, res) => {
  res.status(404).send("Error! Endpoint didnt match. :(");
});

const PORT = 2002;
app.listen(PORT, () => console.log("Server ready at", PORT));

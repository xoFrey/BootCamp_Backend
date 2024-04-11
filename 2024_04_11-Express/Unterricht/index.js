import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("new request:", req.method, res.url);
  res.write("It works! :) ");
  res.end();
});

const PORT = 2002;
app.listen(PORT, () => console.log("Server ready at", PORT));

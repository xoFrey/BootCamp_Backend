import express from "express";

const app = express();

// Thema: Routing bei Express
// Request-Package: [[header: {method: "GET", url:"/hallo"}, {body: <empty>}]]
// geht durch die Endpunkte und führt nur das aus was der header matched! res.send() beendet das paket und sendet es zurück => methode und url müssen übereinstimmen (Endpunkt)

app.get("/", (req, res) => {
  console.log("new request:", req.method, req.url);
  res.send("It works! :) ");
});

app.get("/hallo", (req, res) => {
  console.log("new request:", req.method, req.url);
  res.send("Hallo zurück!!!");
});

app.get("/hallo", (req, res) => {
  console.log("new request:", req.method, req.url);
  res.send("Hallo von Oben!!!");
});

const PORT = 2002;
app.listen(PORT, () => console.log("Server ready at", PORT));

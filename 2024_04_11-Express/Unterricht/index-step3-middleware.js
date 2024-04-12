import express from "express";

const app = express();

// sobald was reinkommt:
// underscore _ => platzhalter weil res nicht genutzt wird ( damit das nicht so ausgegraut ist)
// app.use((req, res, next)=> {})
app.use((req, _, next) => {
  console.log("new request:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("It works! :) ");
});

// !middleware => akzeptiert alles, führt auf und geht weiter => braucht next()
// ist egal an welcher stelle die app.use steht
// bei log einfach an den anfang, aber bei anderen funktionen => ist ein zwischenschritt der immer ausgeführt wird egal welche request.method/route angefragt wird.
// zb login => führe app.use aus bevor man zur nächsten page weiter gehen kann
// code wird von oben nach unten ausgeführt, also kann es in der mitte stehen und wird erst ausgeführt wenn die anderen codes dran waren
// *app.use((req, _, next) => {
//  * console.log("new request:", req.method, req.url);
//  * next();
//* });

app.get("/hallo", (req, res) => {
  res.send("Hallo !!!");
});

const PORT = 2002;
app.listen(PORT, () => console.log("Server ready at", PORT));

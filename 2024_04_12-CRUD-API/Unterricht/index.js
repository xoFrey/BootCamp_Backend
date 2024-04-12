import express from "express";
import {
  readJsonFile,
  readTransactions,
  writeTransactions,
} from "./filesystem.js";

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);

  next();
});

// Daten werden im Body versendet
// Body einer request muss erstmal geparsed werden, um auf seinen Inhalt zugreifen zu können
// dazu verwenden wir einen Body-Parser-middleware (zB: express.json) => body-parser von express, der json inhalte parsed
// req {body: undefined }=> [express.json(), body parser middleware, next()] >>>> req {body: {.....}}
app.use(express.json());

app.get("/api/v1/transactions", (req, res) => {
  //   Read transactions.json file  //   parse content to js  //   send to client
  readTransactions()
    .then((transaction) => res.json(transaction))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read new transaction" })
    );
});

app.get("/api/v1/transactions/:id", (req, res) => {
  const transactionId = req.params.id; //in der route gibt es einen route-parameter ..../:id ==> String!!
  readTransactions()
    .then((transaction) =>
      transaction.find((t) => t.id.toString() === transactionId)
    )
    .then((foundTransaction) => res.status(200).json(foundTransaction))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read new transaction" })
    );
});

app.post("/api/v1/transactions", (req, res) => {
  // readTransactions => transactions [...]."push"(newTransaction) (nutzen kein push)=> transactions [..., {newTransaction}]
  // writeTransactions() => save
  const newTransaction = {
    id: Date.now(), // Übung: implement auto-increment id => les die datei, nimm die größte id, mach plus 1
    // id: readTransactions().then((data)=> console.log(data.id)),
    timestamp: Date.now(),
    type: req.body.type,
    description: req.body.description,
    amount: req.body.amount,
  };

  readTransactions()
    .then((transaction) => [...transaction, newTransaction])
    .then((transactionWithNew) => writeTransactions(transactionWithNew))
    .then((transactionWithNew) => res.status(200).json(transactionWithNew))
    .catch((err) =>
      res.status(500).json({ err, message: "could not add new transaction" })
    );
});

// * put vs patch !!!!
// patch => ressource modifizieren, braucht nur das was geupdated werden muss => update ressource, wenn nicht gefunden, fehler
// put => ressource modifizieren, braucht die ganze datei 0>  wenn sie nicht gefunden wird, wird sie angelegt

app.patch("/api/v1/transactions/:id", (req, res) => {
  const transactionIdToUpdate = req.params.id;
  const updateInfo = req.body; // amount, description, type

  readTransactions()
    .then((transaction) =>
      transaction.map((currentTransaction) => {
        if (currentTransaction.id.toString() === transactionIdToUpdate) {
          return {
            ...currentTransaction,
            ...updateInfo,
          }; // override currentTransaction (to be updated) with updateInfo
        } else {
          return currentTransaction; // leave nontargeted transactions alone
        }
      })
    )
    .then((transaction) => writeTransactions(transaction)) // alle transaction aber ohne den gelöschten item
    .then((transaction) => res.status(200).json(transaction))
    .catch((err) =>
      res.status(500).json({ err, message: "could not remove new transaction" })
    );
});

app.delete("/api/v1/transactions/:id", (req, res) => {
  const transactionIdToDelete = req.params.id;

  readTransactions()
    .then((transaction) =>
      transaction.filter((item) => item.id.toString() !== transactionIdToDelete)
    )
    .then((transaction) => writeTransactions(transaction)) // alle transaction aber ohne den gelöschten item
    .then((transaction) => res.status(200).json(transaction))
    .catch((err) =>
      res.status(500).json({ err, message: "could not remove new transaction" })
    );
});

const PORT = 2002;

app.listen(PORT, () => console.log("Server ready at "), PORT);

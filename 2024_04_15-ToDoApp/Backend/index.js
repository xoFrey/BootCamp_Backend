import express from "express";
import { readFile, writeFile } from "./filesystem.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use((req, _, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/v1/todos", (req, res) => {
  readFile()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

app.post("/api/v1/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    description: req.body.description,
  };

  readFile()
    .then((data) => [...data, newTodo])
    .then((newData) => writeFile(newData))
    .then((newData) => res.json(newData))
    .catch((err) => res.status(500).json({ message: err }));
});

app.patch("/api/v1/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const updateTodo = req.body;

  readFile()
    .then((data) => {
      return data.map((item) => {
        if (item.id.toString() === todoId) {
          return {
            ...item,
            ...updateTodo,
          };
        } else {
          return item;
        }
      });
    })
    .then((data) => writeFile(data))
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

app.delete("/api/v1/todos/:id", (req, res) => {
  const deleteID = req.params.id;

  readFile()
    .then((data) => {
      return data.filter((item) => item.id.toString() !== deleteID.toString());
    })
    .then((data) => writeFile(data))
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

const PORT = 2003;

app.listen(PORT, () => console.log("Server Ready at", PORT));

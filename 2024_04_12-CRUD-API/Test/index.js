import express from "express";
import { writeToDoList, readTodoList } from "./filesystem.js";

const app = express();

app.use((req, _, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/v1/todos", (req, res) => {
  readTodoList()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read new data" })
    );
});

app.get("/api/v1/todos/:id", (req, res) => {
  const todoId = req.params.id;
  readTodoList()
    .then((todo) => todo.find((t) => t.id.toString() === todoId))
    .then((foundTodo) => res.status(200).json(foundTodo))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read new transaction" })
    );
});

app.post("/api/v1/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    timestamp: Date.now(),
    type: req.body.type,
    description: req.body.description,
    amount: req.body.amount,
  };

  readTodoList()
    .then((todo) => [...todo, newTodo])
    .then((todoWithNew) => writeToDoList(todoWithNew))
    .then((todoWithNew) => res.status(200).json(todoWithNew))
    .catch((err) =>
      res.status(500).json({ err, message: "could not add new transaction" })
    );
});

app.patch("/api/v1/todos/:id", (req, res) => {
  const todoUpdateId = req.params.id;
  const updateInfo = req.body; // amount, description, type

  readTodoList()
    .then((todo) =>
      todo.map((todo) => {
        if (todo.id.toString() === todoUpdateId) {
          return {
            ...todo,
            ...updateInfo,
          };
        } else {
          return todo;
        }
      })
    )
    .then((todo) => writeToDoList(todo))
    .then((todo) => res.status(200).json(todo))
    .catch((err) =>
      res.status(500).json({ err, message: "could not remove new transaction" })
    );
});

app.delete("/api/v1/todos/:id", (req, res) => {
  const todoDeleteId = req.params.id;

  readTodoList()
    .then((todo) => todo.filter((item) => item.id.toString() !== todoDeleteId))
    .then((todo) => writeToDoList(todo))
    .then((todo) => res.status(200).json(todo))
    .catch((err) =>
      res.status(500).json({ err, message: "could not remove new transaction" })
    );
});

const PORT = 2002;

app.listen(PORT, () => console.log("Server ready at "), PORT);

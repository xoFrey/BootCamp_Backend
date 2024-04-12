import express from "express";
import { readToDoList, writeTodo } from "./filesystem.js";

const app = express();

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/v1/todo", (_, res) => {
  readToDoList()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read new Todolist" })
    );
});

app.post("/api/v1/todo", (req, res) => {
  const todoList = {
    id: Date.now(), // neue id noch erstellen
    checked: req.body.checked,
    status: req.body.status,
    task: req.body.task,
  };

  readToDoList()
    .then((data) => [...data, todoList])
    .then((newData) => writeTodo(newData))
    .then((newData) => res.status(200).json(newData))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create new ToDo!" })
    );
});

// app.patch("")

// app.delete("")

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at ", PORT));

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
      res.status(500).json({ err: err, message: "Could not create new ToDo!" })
    );
});

// app.patch("")

app.patch("/api/v1/todo/:id", (req, res) => {
  const todoID = req.params.id;
  const updateTodo = req.body;

  readToDoList()
    .then((data) =>
      data.map((item) => {
        if (item.id.toString() === todoID) {
          return {
            ...item,
            ...updateTodo,
          };
        } else {
          return item;
        }
      })
    )
    .then((data) => writeTodo(data))
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ err: err, message: "Could not create new ToDo!" });
      console.log(err);
    });
});

// app.delete("")

const PORT = 2002;
app.listen(PORT, () => console.log("Server ready at ", PORT));

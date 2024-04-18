import express from "express";
import { readFile, writeFile } from "./filesystem.js";
import cors from "cors";
import multer from "multer";
import { body, param, validationResult } from "express-validator";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

app.use((req, _, next) => {
  console.log(req.method, req.url);
  next();
});

const upload = multer({ dest: "./uploads" });

app.post("/api/v1/files/upload", upload.single("file"), (req, res) => {
  res.json({ fileName: req.file.filename });
});

app.get("/", (req, res) => {
  res.send("Hiiii");
});

app.get("/api/v1/guestbook", (req, res) => {
  readFile()
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" });
      console.log(err);
    });
});

app.post(
  "/api/v1/guestbook",
  body("firstName").isString().notEmpty(),
  body("lastName").isString().notEmpty(),
  body("email").isEmail(),
  body("entry").isString().notEmpty(),

  (req, res) => {
    const newEntry = {
      id: Date.now(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      entry: req.body.entry,
      fileName: req.body.fileName,
    };

    readFile()
      .then((entries) => [newEntry, ...entries])
      .then((entries) => writeFile(entries))
      .then((entries) => res.json(entries))
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(err);
      });
  },
);

const PORT = 1000;
app.listen(PORT, () => console.log("Server ready at", PORT));

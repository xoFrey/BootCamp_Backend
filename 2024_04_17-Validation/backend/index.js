import express from "express";
import { readFile, writeFile } from "./filesystem.js";
import { body, param, validationResult } from "express-validator";

const app = express();
const PORT = 2002;

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/", (_, res) => {
  res.send("It works!:)");
});

app.get("/api/v1/trees/:treeId", param("treeId").isNumeric(), (req, res) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      message: "Data not valid",
      error: validationErrors.array(),
    });
  }
  const treeId = req.params.treeId;

  readFile()
    .then((trees) => trees.find((tree) => tree.id.toString() === treeId))
    .then((foundTree) => {
      if (foundTree) res.json(foundTree);
      else
        res.status(404).json({ message: "Could not find Tree with " + treeId });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error " });
    });
});

app.post(
  "/api/v1/trees",
  body("age").isInt({ min: 0 }),
  body("contact.name").isString().notEmpty(),
  body("contact.email").isEmail(),
  body("contact.phone").isMobilePhone(),
  //   body("geo.lon").isLatLong(),
  //   body("geo.lat").isLatLong(),
  body("area").isString().notEmpty(),
  body("type").isIn(["laubbaum", "nadelbaum", "standardbaum"]),
  body("radius").isDecimal(),
  body("imgURL").isString().notEmpty(),

  (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", error: validationErrors.array() });
    }

    const newTree = {
      id: Date.now(),
      contact: {
        name: req.body.contact.name,
        email: req.body.contact.email,
      },
      age: req.body.age,
      geo: {
        lon: req.body.geo.lon,
        lat: req.body.geo.lat,
      },
      area: req.body.area,
      type: req.body.type,
      radius: req.body.radius,
      height: req.body.height,
      imgURL: req.body.imgURL,
    };

    readFile()
      .then((trees) => [...trees, newTree])
      .then((treesWithNew) => writeFile(treesWithNew))
      .then((treesWithNew) => res.json(treesWithNew))
      .catch((err) =>
        res.status(500).json({ message: "Internal Server Error" }),
      );
  },
);

app.listen(PORT, () => console.log("Starting server at", PORT));

import express from "express";
import morgan from "morgan";
import { RecipeDAO } from "./access/recipeDAO.js";
import { RatingDAO } from "./access/ratingDAO.js";
import { ObjectId } from "mongodb";
import { Recipe } from "./models/Recipe.js";
import { Rating } from "./models/Rating.js";
import cors from "cors";
import { connectToDB } from "./models/index.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// ! GET Functions
// * Recipe

app.get("/api/v1/recipes", (req, res) => {
  Recipe.find()
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not create recipe" });
    });
});

// * Recipe with Rating

app.get("/api/v1/recipes/:recipeId", (req, res) => {
  const recipeId = req.params.recipeId;
  Promise.all([Recipe.findById({ recipeId }), Rating.find({ recipeId })])
    .then(([foundRecipe, ratings]) =>
      res.json(foundRecipe ? { ...foundRecipe.toObject(), ratings } : {}),
    )
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create recipe" }),
    );
});

// ! POST Functions
// * Recipe
app.post("/api/v1/recipes", (req, res) => {
  const newRecipe = req.body;
  Recipe.create(newRecipe)
    .then((added) => res.json(added || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create recipe" }),
    );
});

// * Rating
app.post("/api/v1/recipes/:recipeId/rating", (req, res) => {
  const newRatingInfo = {
    text: req.body.text,
    recipeId: ObjectId.createFromHexString(req.params.recipeId),
  };
  Rating.create(newRatingInfo)
    .then((added) => res.json(added || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create rating" }),
    );
});

// ! DELETE Functions
// * Recipe
app.delete("/api/v1/recipes/:recipeId", (req, res) => {
  Recipe.findByIdAndDelete(req.params.recipeId)
    .then((deleted) => res.json(deleted || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create rating" }),
    );
});
// * Rating
app.delete("/api/v1/rating/:ratingId", (req, res) => {
  Rating.findByIdAndDelete(req.params.ratingId)
    .then((deleted) => res.json(deleted || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create rating" }),
    );
});

// ! PATCH Functions
// * Recipe

app.patch("/api/v1/recipes/:recipeId", (req, res) => {
  const recipeId = req.params.recipeId;
  const updateInfo = req.body;
  Recipe.findOneAndUpdate({ _id: recipeId }, updateInfo, { new: true })
    .then((updated) => res.json(updated || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Internal server error" });
    });
});

const PORT = 1000;
connectToDB()
  .then(() => {
    app.listen(PORT, () => console.log("Server ready at", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

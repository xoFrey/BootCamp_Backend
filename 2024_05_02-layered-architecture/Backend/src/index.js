import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDB } from "./models/index.js";
import { RecipeController } from "./controller/recipeCotroller.js";
import { RatingController } from "./controller/ratingController.js";
import { recipeRouter } from "./routes/recipeRouter.js";
import { ratingRouter } from "./routes/ratingRouter.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/v1/recipes", recipeRouter);
app.use("/api/v1/rating", ratingRouter);

const PORT = 1000;
connectToDB()
  .then(() => {
    app.listen(PORT, () => console.log("Server ready at", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

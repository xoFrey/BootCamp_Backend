import express from "express";
import { RecipeController } from "../controller/recipeCotroller.js";

// api/v1/recipes
export const recipeRouter = express
  .Router()
  .get("/", RecipeController.getAllRecipesCtrl)
  .get("/:recipeId", RecipeController.getOneRecipeCtrl)
  .post("/", RecipeController.createRecipeCtrl)
  .delete("/:recipeId", RecipeController.deleteRecipeCtrl)
  .patch("/:recipeId", RecipeController.updateRecipeCtrl);

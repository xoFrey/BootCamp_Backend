import { Recipe } from "../models/Recipe.js";

const deleteRecipe = async (recipeId) => {
  const removed = await Recipe.findByIdAndDelete(recipeId);
  if (!removed) throw new Error("Could not remove");
  return removed;
};

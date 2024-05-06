import { Rating } from "../models/Rating.js";
import { Recipe } from "../models/Recipe.js";

export const addRating = async (recipeId, ratingInfo) => {
  const foundRecipe = await Recipe.findById(recipeId);
  if (!foundRecipe) throw new Error("Recipe not found");
  return Rating.create({ ...ratingInfo, recipeId });
};

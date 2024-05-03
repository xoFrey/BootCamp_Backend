import { Rating } from "../models/Rating.js";
import { Recipe } from "../models/Recipe.js";

export const addRating = (recipeId, ratingInfo) => {
  return Recipe.findById(recipeId).then((foundRecipe) => {
    if (!foundRecipe) throw new Error("Recipe not found");
    else return Rating.create({ ...ratingInfo, recipeId });
  });
};

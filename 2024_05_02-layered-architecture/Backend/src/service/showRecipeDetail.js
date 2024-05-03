import { Rating } from "../models/Rating.js";
import { Recipe } from "../models/Recipe.js";

export const showRecipeDetail = (recipeId) => {
  return Promise.all([
    Recipe.findById({ recipeId }),
    Rating.find({ recipeId }),
  ]).then(([foundRecipe, ratings]) => {
    if (foundRecipe)
      return res.json(
        foundRecipe ? { ...foundRecipe.toObject(), ratings } : {},
      );
    else return null;
  });
};

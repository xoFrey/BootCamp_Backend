import { Rating } from "../models/Rating.js";
import { Recipe } from "../models/Recipe.js";

export const showRecipeDetail = async (recipeId) => {
  const [foundRecipe, ratings] = Promise.all([
    Recipe.findById({ recipeId }),
    Rating.find({ recipeId }),
  ]);
  if (!foundRecipe) throw new ErrorEvent("Recipe not found!");
  else return { ...foundRecipe.toObject(), ratings };
};

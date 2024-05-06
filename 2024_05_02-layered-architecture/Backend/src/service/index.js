import { addRating } from "./addRating.js";
import { addRecipe } from "./addRecipe.js";
import { deleteRating } from "./deleteRating.js";
import { editRecipe } from "./editRecipe.js";
import { showAllRecipes } from "./showAllRecipes.js";
import { showRecipeDetail } from "./showRecipeDetail.js";

export const RecipeService = {
  showAllRecipes,
  showRecipeDetail,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
export const RatingService = {
  addRating,
  deleteRating,
};

import { Recipe } from "../models/Recipe.js";

export const addRecipe = (recipeInfo) => {
  return Recipe.findOne({ name: recipeInfo.name }).then((foundReicpe) => {
    if (foundReicpe) {
      throw new Error("Recipe with this name already exists");
    } else {
      return Recipe.create(recipeInfo);
    }
  });
};

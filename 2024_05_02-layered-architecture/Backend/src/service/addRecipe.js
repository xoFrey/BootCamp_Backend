import { Recipe } from "../models/Recipe.js";

export const addRecipe = async (recipeInfo) => {
  const foundOne = await Recipe.findOne({ name: recipeInfo.name });
  if (foundOne) throw new Error("Recipe with this name already exists");
  return Recipe.create(recipeInfo);
};

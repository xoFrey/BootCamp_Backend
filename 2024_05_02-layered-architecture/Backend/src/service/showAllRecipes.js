import { Recipe } from "../models/Recipe.js";

export const showAllRecipes = async () => {
  const recipes = await Recipe.find({});
  return recipes;
};

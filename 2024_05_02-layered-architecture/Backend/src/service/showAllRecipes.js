import { Recipe } from "../models/Recipe.js";

export const showAllRecipes = () => {
  return Recipe.find({});
};

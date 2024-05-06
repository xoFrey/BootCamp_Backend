import { Recipe } from "../models/Recipe.js";

export const editRecipe = async (recipeId, updateInfo) => {
  if (updateInfo.name) {
    const found = await Recipe.findOne({ name: updateInfo.name });
    if (found) {
      throw new Error("Cannot change name to an exisiting one!");
    }
  }
  return Recipe.findByIdAndUpdate(
    recipeId,
    { $set: updateInfo },
    { new: true },
  );
};

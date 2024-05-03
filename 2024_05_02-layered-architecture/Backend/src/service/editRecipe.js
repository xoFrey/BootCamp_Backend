import { Recipe } from "../models/Recipe.js";

export const editRecipe = (recipeId, updateInfo) => {
  const updateRecipe = () => {
    Recipe.findByIdAndUpdate(recipeId, { $set: updateInfo }, { new: true });
  };

  if (updateInfo.name) {
    return Recipe.findOne({ name: updateInfo.name }).then((found) => {
      if (found) {
        throw new Error("Cannot change name to an exisiting one!");
      }
      return updateRecipe();
    });
  } else {
    return updateRecipe();
  }
};

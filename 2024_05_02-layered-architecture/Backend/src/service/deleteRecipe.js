const deleteRecipe = (recipeId) => {
  return Recipe.findByIdAndDelete(recipeId).then((removed) => {
    if (!removed) throw new Error("Could not remove");
  });
};

import { RecipeService } from "../service";

const getAllRecipesCtrl = (req, res) => {
  RecipeService.showAllRecipes()
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find recipe" });
    });
};

const getOneRecipeCtrl = (req, res) => {
  const recipeId = req.params.recipeId;
  RecipeService.showRecipeDetail(recipeId)
    .then((foundRecipe) => res.json(foundRecipe))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create recipe" }),
    );
};

const createRecipeCtrl = (req, res) => {
  const newRecipe = req.body;
  RecipeService.addRecipe(newRecipe)
    .then((added) => res.json(added || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create recipe" }),
    );
};

const deleteRecipeCtrl = (req, res) => {
  Recipe.findByIdAndDelete(req.params.recipeId)
    .then((deleted) => res.json(deleted || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create rating" }),
    );
};

const updateRecipeCtrl = (req, res) => {
  const recipeId = req.params.recipeId;
  const updateInfo = req.body;
  RecipeService.editRecipe(recipeId, updateInfo)
    .then((updated) => res.json(updated || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Internal server error" });
    });
};

export const RecipeController = {
  getAllRecipesCtrl,
  getOneRecipeCtrl,
  createRecipeCtrl,
  deleteRecipeCtrl,
  updateRecipeCtrl,
};

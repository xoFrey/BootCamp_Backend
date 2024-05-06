import { RecipeService } from "../service";

const getAllRecipesCtrl = async (req, res) => {
  try {
    const recipe = await RecipeService.showAllRecipes();
    res.json(recipe);
  } catch {
    console.log(err);
    res.status(500).json({ err, message: "Could not find recipe" });
  }
};

const getOneRecipeCtrl = async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const foundRecipe = await RecipeService.showRecipeDetail(recipeId);

    res.json(foundRecipe);
  } catch {
    res.status(500).json({ err, message: "Could not create recipe" });
  }
};

const createRecipeCtrl = async (req, res) => {
  try {
    const newRecipe = req.body;
    const added = await RecipeService.addRecipe(newRecipe);
    res.json(added || {});
  } catch {
    res.status(500).json({ err, message: "Could not create recipe" });
  }
};

const deleteRecipeCtrl = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.recipeId);
    res.json(deleted || {});
  } catch {
    res.status(500).json({ err, message: "Could not create rating" });
  }
};

const updateRecipeCtrl = async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const updateInfo = req.body;
    const updated = await RecipeService.editRecipe(recipeId, updateInfo);
    res.json(updated || {});
  } catch {
    console.log(err);
    res.status(500).json({ err, message: "Internal server error" });
  }
};

export const RecipeController = {
  getAllRecipesCtrl,
  getOneRecipeCtrl,
  createRecipeCtrl,
  deleteRecipeCtrl,
  updateRecipeCtrl,
};

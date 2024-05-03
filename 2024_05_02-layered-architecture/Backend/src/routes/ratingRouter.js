import express from "express";

export const ratingRouter = express
  .Router()
  .post("/toRecipe/:recipeId", RatingController.createRatingCtrl)
  .delete("/:ratingId", RatingController.deleteRatingCtrl);

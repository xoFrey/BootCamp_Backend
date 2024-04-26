import mongoose, { mongo } from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    text: { type: String, trim: true, required: true },
    stars: { type: Number, min: 0, max: 5 },
    recipeID: { type: mongoose.Types.ObjectId, ref: "Recipe" },
  },
  { collection: "ratings", timestamps: true },
);

export const Rating = mongoose.model("Rating", recipeSchema);

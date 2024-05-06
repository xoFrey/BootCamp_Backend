import { Rating } from "../models/Rating.js";

export const deleteRating = async (ratingId) => {
  const removed = await Rating.findByIdAndDelete(ratingId);
  if (!removed) throw new Error("Rating with this ID wasnt found!");
  return removed;
};

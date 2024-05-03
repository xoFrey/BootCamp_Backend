import { Rating } from "../models/Rating.js";

export const deleteRating = (ratingId) => {
  return Rating.findByIdAndDelete(ratingId).then((removed) => {
    if (!removed) throw new Error("Rating with this ID wasnt found!");
    else return removed;
  });
};

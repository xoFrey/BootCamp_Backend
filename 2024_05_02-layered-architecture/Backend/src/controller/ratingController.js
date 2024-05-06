import { RatingService } from "../service.js";

const createRatingCtrl = async (req, res) => {
  try {
    const added = await RatingService.addRating(
      req.body.text,
      ObjectId.createFromHexString(req.params.recipeId),
    );
    res.json(added || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not create rating" });
  }
};

const deleteRatingCtrl = async (req, res) => {
  try {
    const deleted = await RatingService.deleteRating();
    res.json(deleted || {});
  } catch {
    res.status(500).json({ err, message: "Could not create rating" });
  }
};

export const RatingController = { createRatingCtrl, deleteRatingCtrl };

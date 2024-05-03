import { RatingService } from "../service.js";

const createRatingCtrl = (req, res) => {
  const newRatingInfo = {
    text: req.body.text,
    recipeId: ObjectId.createFromHexString(req.params.recipeId),
  };
  RatingService.addRating(recipeId, newRatingInfo)
    .then((added) => res.json(added || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create rating" }),
    );
};

const deleteRatingCtrl = (req, res) => {
  RatingService.deleteRating()
    .then((deleted) => res.json(deleted || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not create rating" }),
    );
};

export const RatingController = { createRatingCtrl, deleteRatingCtrl };

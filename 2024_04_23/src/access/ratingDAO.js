// rating data access object
import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

const findAll = () => {
  getDb().then((db) => db.collection("rating").find().toArray());
};

const findById = () => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("rating").findOne({ _id: idAsObjectId }),
  );
};

const createOne = (ratingInfo) => {
  return getDb()
    .then((db) => db.collection("rating").insertOne(ratingInfo))
    .then(({ acknowledged, insertedId }) =>
      acknowledged ? { ...ratingInfo, _id: insertedId } : null,
    );
};

const updateOne = (id, updateInfo) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("rating")
        .updateOne({ _id: idAsObjectId }, { $set: updateInfo }),
    )
    .then((result) => {
      if (result.acknowledged && result.modifiedCount === 1)
        return findById(id);
      else return null;
    });
};

const deleteOne = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("rating").findOneAndDelete({ _id: idAsObjectId }),
  );
};

const findByRecipe = (recipeId) => {
  const idAsObjectId = ObjectId.createFromHexString(recipeId);
  return getDb().then((db) =>
    db.collection("rating").find({ recipeId: idAsObjectId }).toArray(),
  );
};

export const RatingDAO = {
  findAll,
  findById,
  createOne,
  updateOne,
  deleteOne,
  findByRecipe,
};

// recipe data access object
import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

const findAll = () => {
  return getDb().then((db) => db.collection("recipe").find().toArray());
};

const findById = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("recipe").findOne({ _id: idAsObjectId }),
  );
};

const createOne = (recipeInfo) => {
  return getDb()
    .then((db) => db.collection("recipe").insertOne(recipeInfo))
    .then(({ acknowledged, insertedId }) =>
      acknowledged ? { ...recipeInfo, _id: insertedId } : null,
    );
};

const updateOne = (id, updateInfo) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("recipe")
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
    db.collection("recipe").findOneAndDelete({ _id: idAsObjectId }),
  );
};

export const RecipeDAO = { findAll, findById, createOne, updateOne, deleteOne };

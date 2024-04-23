import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

const findAll = () => {
  return getDb().then((db) => db.collection("movieDetails").find().toArray());
};

const findById = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOne({ _id: idAsObjectId }),
  );
};

const findAllFavorited = () => {
  return getDb()
    .then((db) => db.collection("favorites").find().toArray()) // [{ _id: favid , movieID: movieID}]
    .then((favoritesDocs) => favoritesDocs.map((item) => item.movieID)) // [ObjectId,...]
    .then((favIds) => Promise.all([getDb(), favIds]))
    .then(([db, favIds]) =>
      db
        .collection("movieDetails")
        .find({ _id: { $in: favIds } })
        .toArray(),
    );
};

const insertOne = (newMovie) => {
  return getDb()
    .then((db) => db.collection("movieDetails").insertOne(newMovie))
    .then((result) =>
      result.acknowledged ? { ...newMovie, _id: result.insertedId } : null,
    );
};

const deleteOne = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOneAndDelete({ _id: idAsObjectId }),
  );
};

const updateOne = (id, updateInfo) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("movieDetails")
        .updateOne({ _id: idAsObjectId }, { $set: updateInfo }),
    )
    .then((result) => {
      if (result.acknowledged && result.modifiedCount === 1)
        return findById(id);
      else return null;
    });
};

export const MovieDAO = {
  findAll,
  insertOne,
  deleteOne,
  findById,
  updateOne,
  findAllFavorited,
};

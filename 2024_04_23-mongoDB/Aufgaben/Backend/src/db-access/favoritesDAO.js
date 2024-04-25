import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

const findAll = () => {
  return getDb().then((db) => db.collection("favorites").find().toArray());
};

const findById = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("favorites").findOne({ _id: idAsObjectId }),
  );
};

const insertOne = (newFav) => {
  return getDb()
    .then((db) => db.collection("favorites").insertOne(newFav))
    .then((result) =>
      result.acknowledged ? { ...newFav, _id: result.insertedId } : null,
    );
};

const deleteByMovieID = (id) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("favorites").findOneAndDelete({ movieID: idAsObjectId }),
  );
};

const updateOne = (id, updateInfo) => {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("favorites")
        .updateOne({ _id: idAsObjectId }, { $set: updateInfo }),
    )
    .then((result) => {
      if (result.acknowledged && result.modifiedCount === 1)
        return findById(id);
      else return null;
    });
};

const findByMovie = (movieID) => {
  const idAsObjectId = ObjectId.createFromHexString(movieID);
  return getDb().then((db) =>
    db.collection("favorites").find({ movieID: idAsObjectId }).toArray(),
  );
};

export const FavoriteDAO = {
  findAll,
  insertOne,
  deleteByMovieID,
  findById,
  updateOne,
  findByMovie,
};

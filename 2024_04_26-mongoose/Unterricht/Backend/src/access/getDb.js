import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

// Singelton (nach dem Singleton pattern) => Ein Wert darf nur einmalig gesetzt werden
let dbRef = null;

export const getDb = () => {
  return new Promise((resolve, reject) => {
    if (dbRef) {
      return resolve(dbRef);
    }
    client
      .connect()
      .then((clientConnected) => {
        const dbName = "recipeDB";
        const db = clientConnected.db(dbName);
        dbRef = db;
        resolve(db);
      })
      .catch((err) => reject(err));
  });
};

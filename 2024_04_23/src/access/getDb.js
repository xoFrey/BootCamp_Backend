import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

export const getDb = () => {
  return client.connect().then((clientConnected) => {
    const dbName = "recipeDB";
    const db = clientConnected.db(dbName);
    return db;
  });
};

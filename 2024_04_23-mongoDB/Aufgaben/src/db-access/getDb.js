import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

export const getDb = () => {
  return client.connect().then((client) => {
    const dbName = "MovieDB";
    const db = client.db(dbName);
    return db;
  });
};

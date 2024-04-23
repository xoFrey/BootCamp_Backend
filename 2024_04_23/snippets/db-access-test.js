import monodb, { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

client.connect().then((clientConnected) => {
  const dbName = "recipeDB";
  const db = clientConnected.db(dbName);

  return db
    .collection("recipe")
    .insertOne({
      name: "Mamorkuchen",
      personen: 3,
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
    .finally(() => client.close());
});

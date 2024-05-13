import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectToDatabase = () => {
  const dbURL = process.env.MONGO_URL;
  return mongoose.connect(dbURL, { dbName: "Anime-Shop" });
};

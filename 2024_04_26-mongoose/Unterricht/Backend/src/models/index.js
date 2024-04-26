import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectToDB = () => {
  return mongoose.connect(process.env.MONGO_URL, { dbName: "recipeDB" });
};

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDb = () => {
  return mongoose.connect(process.env.MONGO_URL, { dbName: "QuizApp" });
};

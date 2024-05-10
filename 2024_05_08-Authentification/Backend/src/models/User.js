import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, trim: true, required: true },
    lastname: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    bio: { type: String, trim: true, default: "Hi im using Todo.io" },
    passwordHash: { type: String, trim: true, required: true },
    passwordSalt: { type: String, trim: true, required: true },
  },
  { collection: "users", timestamps: true },
);

export const User = mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true, trim: true },
    passwordSalt: { type: String, required: true, trim: true },
    isVerified: { type: Boolean, default: false },
    sixDigitCode: { type: String, required: true },
  },
  { collection: "users", timestamps: true },
);

export const User = mongoose.model("User", userSchema);

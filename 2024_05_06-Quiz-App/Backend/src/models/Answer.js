import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Types.ObjectId, ref: "Answer" },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    feedback: { type: Boolean },
    userAnswer: { type: String },
  },
  { collection: "answers" },
);

export const Answer = mongoose.model("Answer", AnswerSchema);

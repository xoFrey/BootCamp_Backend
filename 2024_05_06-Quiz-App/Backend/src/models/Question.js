import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    choices: {
      right: { type: Array },
      wrong: { type: Array },
    },
    quizId: { type: mongoose.Types.ObjectId, ref: "Quiz" },
    answerId: { type: mongoose.Types.ObjectId, ref: "Answer" },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { collation: "questions" },
);

export const Question = mongoose.model("Question", QuestionSchema);

import mongoose, { Collection } from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Types.ObjectId, ref: "Question" },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    answerId: { type: mongoose.Types.ObjectId, ref: "Answer" },
  },
  { collection: "quizzes" },
);

export const Quiz = mongoose.model("Quiz", QuizSchema);

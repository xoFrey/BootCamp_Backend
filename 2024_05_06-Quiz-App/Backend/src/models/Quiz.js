import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
    questionIds: [{ type: mongoose.Types.ObjectId, ref: "Question" }],
    name: { type: String },
  },
  { collection: "quizzes" },
);

export const Quiz = mongoose.model("Quiz", QuizSchema);

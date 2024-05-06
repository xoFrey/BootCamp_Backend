import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    choices: [{ type: String }],
    correctChoices: [{ type: String }],
  },
  { collection: "questions" },
);

export const Question = mongoose.model("Question", QuestionSchema);

import { Question } from "../../models/Question.js";

export const deleteQuestion = async (questionId) => {
  const deleted = await Question.findByIdAndDelete(questionId);
  if (!deleted) throw new Error("Could not delete Question");
  return deleted;
};

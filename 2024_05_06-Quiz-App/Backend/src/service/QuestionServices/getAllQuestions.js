import { Question } from "../../models/Question.js";

export const getAllQuestions = async () => {
  const allQuestions = await Question.find({});
  return allQuestions;
};

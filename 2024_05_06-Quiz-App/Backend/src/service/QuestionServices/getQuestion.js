import { Question } from "../../models/Question.js";

export const getQuestion = async (questionId) => {
  const foundQ = await Question.findById(questionId);
  return foundQ;
};

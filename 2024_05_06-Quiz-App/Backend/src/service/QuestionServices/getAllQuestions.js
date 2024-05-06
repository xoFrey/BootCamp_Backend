import { Question } from "../../models/Question";

export const getAllQuestions = async () => {
  const allQuestions = await Question.find({});
  return allQuestions;
};

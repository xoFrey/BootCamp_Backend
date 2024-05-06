import { Quiz } from "../../models/Quiz.js";

export const getQuiz = async () => {
  const found = Quiz.find({});
  return found;
};

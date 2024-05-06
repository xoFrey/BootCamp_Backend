import { Quiz } from "../../models/Quiz.js";

export const addQuiz = async (newQuiz) => {
  const added = Quiz.create(newQuiz);
  return added;
};

// existiert questionId?

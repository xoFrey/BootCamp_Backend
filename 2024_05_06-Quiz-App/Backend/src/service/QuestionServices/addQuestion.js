import { Question } from "../../models/Question.js";
import { Quiz } from "../../models/Quiz.js";

export const addQuestion = async (quizId, questionInfo) => {
  const foundQuiz = await Quiz.findById(quizId);
  if (!foundQuiz) throw new Error("Quiz doesn't exist");
  return Question.create(questionInfo);
};

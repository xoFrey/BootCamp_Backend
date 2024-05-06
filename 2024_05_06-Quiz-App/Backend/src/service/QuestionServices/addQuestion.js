import { Question } from "../../models/Question.js";
import { Quiz } from "../../models/Quiz.js";

export const addQuestion = async (quizId, questionInfo) => {
  const foundQuiz = await Quiz.findById(quizId);
  if (!foundQuiz) throw new Error("Quiz doesn't exist");
  const createdQuestion = await Question.create(questionInfo);
  foundQuiz.questionIds.push(createdQuestion._id);
  await foundQuiz.save();
  // mutiert foundQuiz
  return createdQuestion;
};

// findbyidupdateOne => $push operator > schickt direkt zur db (mutiert nicht)

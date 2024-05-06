import { Answer } from "../../models/Answer";
import { Question } from "../../models/Question";

export const addAnswer = async (questionId, answerInfo) => {
  const foundQuestion = await Question.findById(questionId);
  if (!foundQuestion) throw new Error("Question doesnt exist");
  const addedAnswer = await Answer.create(answerInfo);
  return addedAnswer;
  //   connection to question id => erst routes
};

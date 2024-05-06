import { Question } from "../../models/Question.js";

export const editQuestion = async (questionId, updateInfo) => {
  const foundQuestion = await Question.findById(questionId);
  if (!foundQuestion) throw new Error("Could not find question!");
  return Question.findByIdAndUpdate(
    questionId,
    { $set: updateInfo },
    { new: true },
  );
};

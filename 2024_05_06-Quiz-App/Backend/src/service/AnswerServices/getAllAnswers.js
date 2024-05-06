import { Answer } from "../../models/Answer.js";

export const getAllAnswers = async () => {
  const allAnswers = await Answer.find({});
  return allAnswers;
};

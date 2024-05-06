import { Answer } from "../../models/Answer.js";

export const getAnswer = async (answerId) => {
  const answer = await Answer.findById(answerId);
  return answer;
};

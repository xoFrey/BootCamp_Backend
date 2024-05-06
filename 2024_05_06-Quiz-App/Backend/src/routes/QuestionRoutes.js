import express from "express";
import { QuestionController } from "../controller/QuestionController.js";

export const QuestionRouter = express
  .Router()
  .get("/", QuestionController.getAllQuestionsCtrl)
  .get("/:questionId", QuestionController.getQuestionCtrl)
  .post("/quiz/:quizId", QuestionController.addQuestionCtrl)
  .delete("/:questionId", QuestionController.deleteQuestionCtrl)
  .patch("/questionId", QuestionController.editQuestionCtrl);

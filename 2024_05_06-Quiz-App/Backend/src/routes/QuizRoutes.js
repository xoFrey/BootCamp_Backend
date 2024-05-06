import express from "express";
import { QuizController } from "../controller/QuizController.js";

export const QuizRouter = express
  .Router()
  .get("/", QuizController.getQuizCtrl)
  .post("/", QuizController.addQuizCtrl);

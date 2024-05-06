import { QuizService } from "../service/index.js";

const addQuizCtrl = async (req, res) => {
  try {
    const newQuiz = {
      name: req.body.name,
    };
    const addedUser = await QuizService.addQuiz(newQuiz);
    res.json(addedUser || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new User!" });
  }
};

const getQuizCtrl = async (req, res) => {
  try {
    const quizzes = await QuizService.getQuiz();
    res.json(quizzes || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all quizzes!" });
  }
};

export const QuizController = {
  addQuizCtrl,
  getQuizCtrl,
};

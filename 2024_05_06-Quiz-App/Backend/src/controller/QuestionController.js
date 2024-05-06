import { QuestionService } from "../service/index.js";

const getAllQuestionsCtrl = async (req, res) => {
  try {
    const questions = await QuestionService.getAllQuestions();
    res.json(questions || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all questions" });
  }
};

const getQuestionCtrl = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    const question = await QuestionService.getQuestion(questionId);
    res.json(question || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get question!" });
  }
};

const addQuestionCtrl = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const newQuestion = req.body;
    const added = await QuestionService.addQuestion(quizId, newQuestion);
    res.json(added || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new question!" });
  }
};

const deleteQuestionCtrl = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    const deleted = await QuestionService.deleteQuestion(questionId);
    res.json(deleted || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not delete Question!" });
  }
};

const editQuestionCtrl = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    const updateInfo = req.body;
    const updated = await UserService.editUser(questionId, updateInfo);
    res.json(updated || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not update question!" });
  }
};

export const QuestionController = {
  getAllQuestionsCtrl,
  getQuestionCtrl,
  addQuestionCtrl,
  deleteQuestionCtrl,
  editQuestionCtrl,
};

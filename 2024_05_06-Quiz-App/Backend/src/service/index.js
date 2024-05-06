import { deleteQuestion } from "./QuestionServices/deleteQuestion.js";
import { editQuestion } from "./QuestionServices/editQuestion.js";
import { getAllQuestions } from "./QuestionServices/getAllQuestions.js";
import { getQuestion } from "./QuestionServices/getQuestion.js";
import { addQuestion } from "./QuestionServices/addQuestion.js";
import { addUser } from "./UserServices/addUser.js";
import { deleteUser } from "./UserServices/deleteUser.js";
import { editUser } from "./UserServices/editUser.js";
import { getallUsers } from "./UserServices/getAllUsers.js";
import { getUser } from "./UserServices/getUser.js";
import { addQuiz } from "./QuizServices/addQuiz.js";
import { getQuiz } from "./QuizServices/getQuiz.js";

export const UserService = {
  getallUsers,
  getUser,
  addUser,
  deleteUser,
  editUser,
};

export const QuestionService = {
  getAllQuestions,
  getQuestion,
  addQuestion,
  deleteQuestion,
  editQuestion,
};

export const QuizService = {
  addQuiz,
  getQuiz,
};

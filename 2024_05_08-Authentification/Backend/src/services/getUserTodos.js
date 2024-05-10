import { Todo } from "../models/Todo.js";

export const getUserTodos = async (authenticatedUserId) => {
  const userTodo = await Todo.find({ userId: authenticatedUserId });
  return userTodo;
};

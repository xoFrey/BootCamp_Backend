import { addUser } from "./UserServices/addUser.js";
import { deleteUser } from "./UserServices/deleteUser.js";
import { editUser } from "./UserServices/editUser.js";
import { getallUsers } from "./UserServices/getAllUsers.js";
import { getUser } from "./UserServices/getUser.js";

export const UserService = {
  getallUsers,
  getUser,
  addUser,
  deleteUser,
  editUser,
};

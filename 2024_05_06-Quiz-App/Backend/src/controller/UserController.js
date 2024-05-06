import { UserService } from "../service/index.js";

const getAllUsersCtrl = async (req, res) => {
  try {
    const users = await UserService.getallUsers();
    res.json(users || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all users!" });
  }
};

const getOneUserCtrl = async (req, res) => {
  try {
    const userId = req.params.userId;
    const users = await UserService.getUser(userId);
    res.json(users || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get user!" });
  }
};

const addNewUserCrtl = async (req, res) => {
  try {
    const newUser = req.body;
    const addedUser = await UserService.addUser(newUser);
    res.json(addedUser || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new User!" });
  }
};

const deleteUserCtrl = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await UserService.deleteUser(userId);
    res.json(deletedUser || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not delete user!" });
  }
};

const editUserCtrl = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updateInfo = req.body;
    const updated = await UserService.editUser(userId, updateInfo);
    res.json(updated || {});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not update user!" });
  }
};

export const UserController = {
  getAllUsersCtrl,
  getOneUserCtrl,
  addNewUserCrtl,
  deleteUserCtrl,
  editUserCtrl,
};

import express from "express";
import { UserController } from "../controller/UserController.js";

export const UserRouter = express
  .Router()
  .get("/", UserController.getAllUsersCtrl)
  .get("/:userId", UserController.getOneUserCtrl)
  .post("/", UserController.addNewUserCrtl)
  .delete("/:userId", UserController.deleteUserCtrl)
  .patch("/:userId", UserController.editUserCtrl);

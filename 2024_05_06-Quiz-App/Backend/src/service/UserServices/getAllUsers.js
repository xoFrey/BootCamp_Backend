import { User } from "../../models/User.js";

export const getallUsers = async () => {
  const allUsers = await User.find({});
  return allUsers;
};

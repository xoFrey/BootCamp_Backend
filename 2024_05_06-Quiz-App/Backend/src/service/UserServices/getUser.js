import { User } from "../../models/User.js";

export const getUser = async (userId) => {
  const userData = await User.findById(userId);
  return userData;
};

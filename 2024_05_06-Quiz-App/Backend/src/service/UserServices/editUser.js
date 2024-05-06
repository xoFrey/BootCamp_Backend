import { User } from "../../models/User.js";

export const editUser = async (userId, updateInfo) => {
  const findUser = await User.findById(userId);
  if (!findUser) throw new Error("User doesn't exist!");
  return User.findByIdAndUpdate(userId, { $set: updateInfo }, { new: true });
};

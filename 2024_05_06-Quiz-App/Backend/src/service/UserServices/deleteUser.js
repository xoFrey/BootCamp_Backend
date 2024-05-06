import { User } from "../../models/User.js";

export const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) throw new Error("Could not remove user");
  return deletedUser;
};

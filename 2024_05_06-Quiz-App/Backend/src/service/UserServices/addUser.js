import { User } from "../../models/User.js";

export const addUser = async (userInfo) => {
  const foundUser = await User.findOne({ email: userInfo.email });
  if (foundUser) throw new Error("User already exists");
  return User.create(userInfo);
};

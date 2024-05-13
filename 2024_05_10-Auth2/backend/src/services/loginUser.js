import { User } from "../models/User.js";
import { createToken } from "../utils/createToken.js";
import { hash } from "../utils/hash.js";
import { userToView } from "./helpers.js";

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User doesnt exist");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("Wrong Password");

  const accessToken = createToken(user, "access");

  return { user: userToView(user), tokens: { accessToken } };
}

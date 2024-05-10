import { User } from "../models/User.js";
import { generateRandomSalt, hash } from "../utils/hash.js";

// {firstname, lastname, email, password} => userInfo
export const registerUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  const foundUser = await User.findOne({ email });
  if (foundUser) throw new Error("User already exists!");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`);
  const user = await User.create({
    firstname,
    lastname,
    email,
    passwordHash,
    passwordSalt,
  });

  //   await sendVerificationEmail(user.email)

  return userToView(user);
};

const userToView = (user) => {
  return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    bio: user.bio,
  };
};

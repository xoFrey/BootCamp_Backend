import { User } from "../models/User.js";
import { hash } from "../utils/hash.js";

export async function doBasicAuth(req, res, next) {
  const _invalidAuth = (message) => {
    return res.status(401).json({ message: message || "not authorized" });
  };
  if (!req.headers.authorization) return _invalidAuth();
  const [authType, authInfo] = req.headers.authorization?.split(" ");
  if (authType !== "Basic") return _invalidAuth();
  if (!authInfo) return _invalidAuth();
  const authInfoToUtf = Buffer.from(authInfo, "base64").toString("utf-8");

  const [email, password] = authInfoToUtf.split(":");
  if (!email || !password) return _invalidAuth();

  const user = await User.findOne({ email });
  if (!user) return _invalidAuth("incorrect email");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPW = passwordHash == user.passwordHash;
  if (!correctPW) return _invalidAuth("incorrect pw");

  req.authenticatedUser = user;

  next();
}

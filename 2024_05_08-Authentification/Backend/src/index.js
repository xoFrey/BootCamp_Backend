import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDB } from "./models/index.js";
import { TodoService, UserService } from "./services/index.js";
import { doBasicAuth } from "./middlewares/doBasicAuth.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.post(
  "/api/v1/users/register",
  async function postRegisterUserCtrl(req, res) {
    try {
      const userInfo = req.body;
      const result = UserService.registerUser(userInfo);
      res.json({ result });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ err, message: err.message || "Could not register!" });
    }
  },
);

app.get(
  "/api/v1/todos",
  doBasicAuth,
  async function getTodosForUserCtrl(req, res) {
    try {
      console.log(req.headers);
      const authenticatedUserId = req.authenticatedUser._id; //"663b494c77fa38303ad7d013"
      const result = await TodoService.getUserTodos(authenticatedUserId);
      res.json({ result });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ err, message: err.message || "Could not register!" });
    }
  },
);

try {
  await connectToDB();
  const PORT = 9000;
  app.listen(PORT, () => console.log("Server ready at", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}

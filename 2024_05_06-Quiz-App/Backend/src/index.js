import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectToDb } from "./models/index.js";
import { UserRouter } from "./routes/UserRoutes.js";
import { QuestionRouter } from "./routes/QuestionRoutes.js";
import { QuizRouter } from "./routes/QuizRoutes.js";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/questions", QuestionRouter);
app.use("/api/v1/quiz", QuizRouter);

app.get("/", (req, res) => {
  res.json("Hi!");
});

try {
  await connectToDb();
  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log("Server ready at"), PORT);
} catch (err) {
  console.log(err);
  process.exit();
}

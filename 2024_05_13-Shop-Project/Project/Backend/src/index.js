import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { productRouter } from "./routes/productRouter";
import { connectToDatabase } from "./models";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/products", productRouter);

try {
  await connectToDatabase();
  app.listen(PORT, () => console.log("Server ready at", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}

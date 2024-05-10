import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    description: { type: String, trim: true, required: true },
    isDone: { type: Boolean, default: false },
    userId: { type: mongoose.Types.ObjectId, ref: "Recipe" },
  },
  { collection: "todos", timestamps: true },
);

export const Todo = mongoose.model("Todo", todoSchema);

Todo.create({
  description: "basic auth fertig machen",
  isDone: false,
  userId: "663b494c77fa38303ad7d013",
});
Todo.create({
  description: "basic auth fertig eiidmedee",
  isDone: false,
  userId: "663b494c77fa38303ad7d013",
});
Todo.create({
  description: "basi eiidmedee",
  isDone: false,
  userId: "663b494c77fa38303ad7d013",
});

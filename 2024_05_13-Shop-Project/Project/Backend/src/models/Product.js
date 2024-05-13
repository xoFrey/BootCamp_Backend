import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: [
      {
        type: String,
        enum: ["Drama", "Action", "Shonen", "Thriller", "Fantasy", "Romance"],
      },
    ],
    description: { type: String, required: true, trim: true },
    variations: [{ type: String, enum: ["DVD", "Online", "Blu-Ray"] }],
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true, trim: true },
  },
  { collection: "products", timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);

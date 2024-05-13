import { Product } from "../../models/Product.js";

export const createProduct = async (productInfo) => {
  const product = await Product.create(productInfo);

  return product;
};

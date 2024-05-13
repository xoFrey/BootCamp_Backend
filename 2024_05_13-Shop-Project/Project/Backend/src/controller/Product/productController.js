import { ProductService } from "../../services";

const createProductCtrl = async (req, res) => {
  try {
    const productInfo = req.body;
    const createdProduct = await ProductService.createProduct(productInfo);
    res.status(201).json({ createdProduct });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not create new Product! " });
  }
};

export const ProductController = { createProductCtrl };

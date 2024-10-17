import { Handler } from "express";
import {
  addNewProduct,
  editProduct,
  findAllProducts,
} from "../services/product";

export const createProduct: Handler = async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    if (!file) throw new Error("File not found");

    await addNewProduct(data, file);

    res.status(200).json({ message: "Create product successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

export const getProducts: Handler = async (_, res) => {
  try {
    const products = await findAllProducts();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

export const updateProduct: Handler = async (req, res) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const file = req.file;

    await editProduct(productId, data, file);

    res.status(200).json({ message: "Update product successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

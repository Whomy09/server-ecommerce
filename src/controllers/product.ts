import { Handler } from "express";
import { addNewProduct } from "../services/product";

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

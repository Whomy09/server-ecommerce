import { Handler } from "express";
import { addNewOrder } from "../services/order";

export const createOrder: Handler = async (req, res) => {
  try {
    const data = req.body;
    await addNewOrder(data);
    res.status(400).json({ message: "Create product successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

import { Handler } from "express";
import {
  addNewOrder,
  editOrder,
  findOrderById,
  findOrders,
  removeOrder,
} from "../services/order";

export const createOrder: Handler = async (req, res) => {
  try {
    const data = req.body;
    await addNewOrder(data);
    res.status(400).json({ message: "Create product successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

export const getOrderById: Handler = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await findOrderById(orderId);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

export const updateOrder: Handler = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const data = req.body;

    await editOrder(orderId, data);

    res.status(200).json({ message: "Update order successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

export const getOrders: Handler = async (req, res) => {
  try {
    const userId = req.query.userId;
    const orders = await findOrders(userId as string);
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

export const deleteOrder: Handler = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    await removeOrder(orderId);
    res.status(200).json({ message: "Delete order successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.toString() });
  }
};

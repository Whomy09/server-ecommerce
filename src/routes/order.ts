import { Router } from "express";
import validateResource from "../middleware";
import {
  createOrderSchema,
  getOrderByIdSchema,
  getOrdersSchema,
  updateOrderSchema,
} from "../schemas/order";
import { createOrder, getOrderById, getOrders, updateOrder } from "../controllers/order";

const router = Router();

router.post("/", validateResource(createOrderSchema), createOrder);
router.get("/:orderId", validateResource(getOrderByIdSchema), getOrderById);
router.patch("/:orderId", validateResource(updateOrderSchema), updateOrder);
router.get("/", validateResource(getOrdersSchema), getOrders);

export default router;

import { Router } from "express";
import validateResource from "../middleware";
import {
  createOrderSchema,
  getOrderByIdSchema,
  updateOrderSchema,
} from "../schemas/order";
import { createOrder, getOrderById, updateOrder } from "../controllers/order";

const router = Router();

router.post("/", validateResource(createOrderSchema), createOrder);
router.get("/:orderId", validateResource(getOrderByIdSchema), getOrderById);
router.patch("/:orderId", validateResource(updateOrderSchema), updateOrder);

export default router;

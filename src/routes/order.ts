import { Router } from "express";
import validateResource from "../middleware";
import {
  createOrderSchema,
  deleteOrderSchema,
  getOrderByIdSchema,
  getOrdersSchema,
  updateOrderSchema,
} from "../schemas/order";
import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrder,
} from "../controllers/order";

const router = Router();

router.post("/", validateResource(createOrderSchema), createOrder);
router.get("/:orderId", validateResource(getOrderByIdSchema), getOrderById);
router.patch("/:orderId", validateResource(updateOrderSchema), updateOrder);
router.get("/", validateResource(getOrdersSchema), getOrders);
router.delete("/:orderId", validateResource(deleteOrderSchema), deleteOrder);

export default router;

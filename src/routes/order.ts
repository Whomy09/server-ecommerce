import { Router } from "express";
import validateResource from "../middleware";
import { createOrderSchema } from "../schemas/order";
import { createOrder } from "../controllers/order";

const router = Router();

router.post("/", validateResource(createOrderSchema), createOrder);

export default router;

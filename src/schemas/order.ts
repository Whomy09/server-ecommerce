import { z } from "zod";
import { OrderStatus } from "../types/order";
import { productSchema } from "./product";
import { stringToDate } from "../utils";

export const OderStatusEnum = z.nativeEnum(OrderStatus);

const orderSchema = z.object({
  id: z.string(),
  products: z.array(productSchema),
  totalAmount: z.number(),
  status: OderStatusEnum,
  createdAt: stringToDate,
  updateAt: stringToDate,
  userId: z.string(),
});

export type Order = z.infer<typeof orderSchema>;

export const createOrderSchema = z.object({
  body: orderSchema.pick({
    products: true,
    totalAmount: true,
    userId: true,
  }),
});

export type BodyCreateOrder = z.infer<typeof createOrderSchema>["body"];

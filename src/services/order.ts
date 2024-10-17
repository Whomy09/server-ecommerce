import { v4 as uuidv4 } from "uuid";
import { BodyCreateOrder } from "../schemas/order";
import { FirestoreService } from "../core/FirestoreServices";
import { OrderStatus } from "../types/order";

export const addNewOrder = async (data: BodyCreateOrder) => {
  const documentId = uuidv4();

  await new FirestoreService().setDocument("orders", documentId, {
    ...data,
    createdAt: new Date(),
    updateAt: new Date(),
    id: documentId,
    status: OrderStatus.Pending,
  });
};

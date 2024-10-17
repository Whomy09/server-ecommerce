import { v4 as uuidv4 } from "uuid";
import { BodyCreateOrder, BodyUpdateOrder } from "../schemas/order";
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

export const findOrderById = async (orderId: string) => {
  return await new FirestoreService().getDocument({
    collection: "orders",
    docId: orderId,
  });
};

export const editOrder = async (orderId: string, data: BodyUpdateOrder) => {
  await new FirestoreService().updateDocument("orders", orderId, data);
};

export const findOrders = async (userId?: string) => {
  let ordersRef = new FirestoreService().getCollectionRef("orders");

  if (!userId) {
    const ordersSnap = await ordersRef.get();
    return ordersSnap.docs.map((order) => order.data());
  }

  const ordersSnap = await ordersRef.where("userId", "==", userId).get();
  return ordersSnap.docs.map((order) => order.data());
};

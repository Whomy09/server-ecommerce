import { v4 as uuidv4 } from "uuid";
import { BodyCreateProduct } from "../schemas/product";
import { StorageServices } from "../core/StorageServices";
import { FirestoreService } from "../core/FirestoreServices";

export const addNewProduct = async (
  data: BodyCreateProduct,
  image: Express.Multer.File
) => {
  const imageId = uuidv4();
  const imageUrl = await new StorageServices().uploadFile(
    `products/${imageId}`,
    image.buffer
  );

  const documentId = uuidv4();
  await new FirestoreService().setDocument("products", documentId, {
    ...data,
    imageUrl,
    id: documentId,
    createdAt: new Date(),
  });
};

export const findAllProducts = async () => {
  const products = await new FirestoreService().getCollection('products');
  return products
}

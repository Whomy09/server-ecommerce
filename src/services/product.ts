import { v4 as uuidv4 } from "uuid";
import {
  BodyCreateProduct,
  BodyUpdateProduct,
  Product,
} from "../schemas/product";
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

  const product: Product = {
    ...data,
    imageUrl,
    id: documentId,
    createdAt: new Date(),
  };

  await new FirestoreService().setDocument("products", documentId, product);

  return product;
};

export const findAllProducts = async () => {
  const products = await new FirestoreService().getCollection("products");
  return products;
};

export const editProduct = async (
  productId: string,
  data: BodyUpdateProduct,
  image?: Express.Multer.File
) => {
  const imageUrl = !!image
    ? await new StorageServices().uploadFile(
        `/products/${uuidv4()}`,
        image.buffer
      )
    : null;

  const product = {
    ...data,
    ...(imageUrl && { imageUrl }),
  };

  await new FirestoreService().updateDocument("products", productId, product);

  return product;
};

export const findProductById = async (docId: string) => {
  return await new FirestoreService().getDocument({
    collection: "products",
    docId,
  });
};

export const removeProduct = async (docId: string) => {
  await new FirestoreService().deleteDocument("products", docId);
};

import multer from "multer";
import { Router } from "express";
import validateResource from "../middleware";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product";
import {
  createProductSchema,
  deleteProductSchema,
  getProductByIdSchema,
  updateProductSchema,
} from "../schemas/product";

const router = Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/",
  [upload.single("file"), validateResource(createProductSchema)],
  createProduct
);
router.get("/", getProducts);
router.patch(
  "/:productId",
  [upload.single("file"), validateResource(updateProductSchema)],
  updateProduct
);
router.get(
  "/:productId",
  validateResource(getProductByIdSchema),
  getProductById
);
router.delete(
  "/:productId",
  validateResource(deleteProductSchema),
  deleteProduct
);

export default router;

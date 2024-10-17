import multer from "multer";
import { Router } from "express";
import validateResource from "../middleware";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/product";
import { createProductSchema, updateProductSchema } from "../schemas/product";

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

export default router;

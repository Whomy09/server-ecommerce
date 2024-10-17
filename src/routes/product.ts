import multer from "multer";
import { Router } from "express";
import validateResource from "../middleware";
import { createProduct } from "../controllers/product";
import { createProductSchema } from "../schemas/product";

const router = Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/",
  [upload.single("file"), validateResource(createProductSchema)],
  createProduct
);

export default router;

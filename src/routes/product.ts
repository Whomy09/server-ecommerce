import multer from 'multer';
import { Router } from "express";
import { getProducts } from "../controllers/product";

const router = Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get("/", upload.single('file'), getProducts);

export default router;

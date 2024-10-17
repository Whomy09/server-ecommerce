import cors from 'cors';
import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: '.env.dev'
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import productRoutes from "./routes/product";

app.use("/api/v1/product", productRoutes);

export default app;

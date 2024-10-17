import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product";

dotenv.config({
  path: '.env.dev'
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/product", productRoutes);

export default app;

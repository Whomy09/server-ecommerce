import { z } from "zod";
import { stringToDate } from "../utils";
import { multerFileSchema } from "./multer";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  description: z.string(),
  createdAt: stringToDate,
});

export type Product = z.infer<typeof productSchema>;

export const createProductSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z
      .string()
      .refine((val) => !isNaN(parseFloat(val)), {
        message: "Price must be a valid number",
      })
      .transform((val) => parseFloat(val)),
    description: z.string(),
  }),
  file: multerFileSchema,
});

export type BodyCreateProduct = z.infer<typeof createProductSchema>['body'];

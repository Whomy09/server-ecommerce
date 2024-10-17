import { z } from "zod";

export const multerFileSchema = z.object({
  fieldname: z.string(),
  originalname: z.string(),
  encoding: z.string(),
  mimetype: z.string(),
  size: z.number(),
  path: z.string().optional(),
  buffer: z.instanceof(Buffer).optional()
});
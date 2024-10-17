import { z } from "zod";

export const stringToDate = z.string().pipe(z.coerce.date());

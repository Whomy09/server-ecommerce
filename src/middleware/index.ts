import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';

const validateResource = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        ...(req.file && { file: req.file })
      });
      next();
    } catch (e: any) {
      res.status(400).send(e.errors);
    }
  };
};

export default validateResource;

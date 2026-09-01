import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validate =
  (schema: z.ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({ body: req.body, params: req.params });

    if (!result.success) {
      // ✅ Formato simple con issues
      return res.status(400).json({
        message: "Datos inválidos",
        errors: result.error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message
        })),
      });
    }
    next();
  };
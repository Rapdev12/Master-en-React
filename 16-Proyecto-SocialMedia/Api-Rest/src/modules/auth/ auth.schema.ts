import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    nick: z
      .string()
      .trim() //borrar espacios en blanco al principio/final antes de validar
      .min(1),

    password: z.string().min(1),
  }),
});

import { z } from "zod";

// Reglas para CREAR un usuario
export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string({ error: "El nombre es obligatorio" }) //si falta el campo o no es un string
      .trim() //borrar espacios en blanco al principio/final antes de validar
      .min(1, "El nombre no puede estar vacío"),

    nick: z
      .string({ error: "El nick es obligatorio" })
      .trim() //borrar espacios en blanco al principio/final antes de validar
      .toLowerCase() //convierte todo a minúsculas automáticamente
      .min(3, "El nick debe tener al menos 3 caracteres"),

    password: z
      .string({ error: "La contraseña es obligatoria" })
      .min(8, "La contraseña debe tener al menos 8 caracteres"),

    image: z.url("La imagen debe ser una URL válida").optional(),
  }),
});
export const getUserByIdSchema = z.object({
  params: z.object({
    id: z.string().length(24, "El id debe ser un ObjectId válido"),
  }),
});
// Ventaja: si mañana cambiás una regla acá, el tipo se actualiza solo.
export type CreateUserInput = z.infer<typeof createUserSchema>["body"];

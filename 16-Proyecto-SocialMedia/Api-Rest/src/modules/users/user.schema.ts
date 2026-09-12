import { z } from "zod";

// Reglas para CREAR un usuario
export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string({ error: "The name is mandatory." }) //si falta el campo o no es un string
      .trim() //borrar espacios en blanco al principio/final antes de validar
      .min(1, "El nombre no puede estar vacío"),

    nick: z
      .string({ error: "The nickname is mandatory." })
      .trim() //borrar espacios en blanco al principio/final antes de validar
      .toLowerCase() //convierte todo a minúsculas automáticamente
      .min(3, "The nickname must be at least 3 characters long."),

    password: z
      .string({ error: "The password is required." })
      .min(8, "The password must be at least 8 characters long."),

    image: z.url("The image must be a valid URL.").optional(),

    displayName: z
    .string()
    .max(20, "The name cannot exceed 20 characters.")
    .optional(),

    biography: z
    .string()
    .max(150, "The biography cannot exceed 150 characters.")
    .optional(),
  }),
});
export const getUserByIdSchema = z.object({
  params: z.object({
    id: z.string().length(24, "The ID must be a valid ObjectId."),
  }),
});

export const updateUserSchema = z.object({
  body: createUserSchema.shape.body.partial(),
});


// Ventaja: si mañana cambiás una regla acá, el tipo se actualiza solo.
export type CreateUserInput = z.infer<typeof createUserSchema>["body"];
export type UpdateUserInput = z.infer<typeof updateUserSchema>["body"];

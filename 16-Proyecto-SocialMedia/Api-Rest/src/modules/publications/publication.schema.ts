import { z } from "zod";

export const createPublicationSchema = z.object({
  body: z.object({
    description: z
      .string()
      .max(350, "It is the maximum number of characters.")
      .optional(),
    //Change the URL when Multer is ready.
    file: z.url("Change the URL when Multer is ready.").optional(),
  }),
});

export const updatePublicationSchema = z.object({
  params: z.object({
    id: z.string().length(24, "The ID must be a valid ObjectId."),
     }),
    body: createPublicationSchema.shape.body.partial(),
  
});

export const deletePublicationSchema = z.object({
  params: z.object({
    id: z.string().length(24, "The Publication must be a valid ObjectId."),
  }),
});

export type updatePublicationSchema = z.infer<typeof updatePublicationSchema>["body"];

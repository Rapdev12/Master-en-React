import { z } from "zod";

export const createFollowSchema = z.object({
  body: z.object({
    followed: z.string().length(24, "The followed ID must be a valid ObjectId."),
  }),
});
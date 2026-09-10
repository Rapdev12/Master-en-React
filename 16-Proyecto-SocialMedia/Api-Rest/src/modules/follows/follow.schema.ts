import { z } from "zod";

export const createFollowSchema = z.object({
  body: z.object({
    followed: z.string().length(24, "The followed ID must be a valid ObjectId."),
  }),
});

export const getFollowSchema = z.object({
  params: z.object({
    id: z.string().length(24, "The ID must be a valid ObjectId."),
  }),
});

export const deleteFollowSchema = z.object({
  params: z.object({
    followed: z.string().length(24, "The Followed must be a valid ObjectId."),
  }),
});
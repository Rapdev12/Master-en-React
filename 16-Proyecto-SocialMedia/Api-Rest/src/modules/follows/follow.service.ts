import { AppError } from "../../shared/Error/AppError";
import { Follow } from "./follow.model";

export const followServices = {
  async createFollow(user: string, followed: string) {
    try {
      return await Follow.create({ user, followed });
    } catch (error: any) {
      if (error.code === 11000) {
        throw new AppError("You are already following this user", 409);
      }
      throw error;
    }
  },

  async deleteFollow(user: string, followed: string) {
    const followDelete = await Follow.findOneAndDelete({ user, followed });

    if (!followDelete) {
      throw new AppError("Follow Error", 404);
    }

    return { message: "Deleted Follow" };
  },

  async getFollowing(user: string) {
    // populate reemplaza el ObjectId de "followed" por los datos reales del User (solo nick e image)
    const following = await Follow.find({ user }).populate(
      "followed",
      "nick image",
    );

    return following;
  },

  async getFollowers(user: string) {
    const follower = await Follow.find({ followed: user }).populate(
      "user",
      "nick image",
    );
    return follower;
  },
};

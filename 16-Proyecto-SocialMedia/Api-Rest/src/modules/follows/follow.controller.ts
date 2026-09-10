import { Request, Response, NextFunction } from "express";
import { followServices } from "./follow.service";



export const followController = {
  async newFollow(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await followServices.createFollow(
        req.user!.id,
        req.body.followed,
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  async deleteFollow(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await followServices.deleteFollow(
        req.user!.id,
        req.params.followed as string,
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  async getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
      const followin = await followServices.getFollowing(
        req.params.id as string,
      );
      res.status(200).json(followin);
    } catch (error) {
      next(error);
    }
  },

  async getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
      const follower = await followServices.getFollowers(
        req.params.id as string,
      );
      res.status(200).json(follower);
    } catch (error) {
      next(error);
    }
  },
};

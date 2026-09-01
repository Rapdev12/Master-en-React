import { Request, Response, NextFunction } from "express";
import { userService } from "./user.service";

export const userController = {
  // POST /users
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },
}
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

  async getById (req: Request, res: Response, next: NextFunction) {
    try{
      const user = await userService.getUserById(req.params.id as string);
      res.status(200).json(user)
    }catch (error) {
      next (error)
    }
  },

   async getAll (req: Request, res: Response, next: NextFunction) {
    try{
      const users = await userService.getAll();
      res.status(200).json(users)
    }catch (error) {
      next (error)
    }
  },

  async deleteUser (req: Request, res: Response, next: NextFunction) {
    try{
      const result = await userService.userDelete(req.params.id as string);
      res.status(200).json(result)
    }catch (error) {
      next (error)
    }
  },
}
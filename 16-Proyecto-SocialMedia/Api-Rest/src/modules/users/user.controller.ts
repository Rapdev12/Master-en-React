import { Request, Response, NextFunction } from "express";
import { userService } from "./user.service";
import { AppError } from "../../shared/Error/AppError";

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

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.getUserById(req.params.id as string);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      // ownership: solo el dueño de la cuenta puede borrarla (no hay admin en este proyecto)
       if(req.user!.id !== req.params.id) {
       return next(new AppError("Forbidden: you can only modify your own account", 403));
      }
      // — si no coinciden, lanzar new AppError(...) con 403 antes de llamar al service
      const result = await userService.userDelete(req.params.id as string);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      // ownership: solo el dueño de la cuenta puede modificarla (no hay admin en este proyecto)
      if(req.user!.id !== req.params.id) {
       return next(new AppError("Forbidden: you can only modify your own account", 403));
      }
      // contra req.params.id — si no coinciden, lanzar AppError 403 Forbidden antes de llamar al service
      const update = await userService.userUpdate(
        req.params.id as string,
        req.body,
      );
      res.status(200).json(update);
    } catch (error) {
      next(error);
    }
  },
};

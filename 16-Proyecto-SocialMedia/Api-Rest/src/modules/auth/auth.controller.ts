import { authServices } from "./auth.service";
import { AppError } from '../../shared/Error/AppError';
import { Request, Response, NextFunction } from "express";





export const authController = {

    async userLogin(req: Request, res: Response, next: NextFunction) {
    try {
        const body = req.body;
      const result = await authServices.loginUser(body.nick, body.password);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

}
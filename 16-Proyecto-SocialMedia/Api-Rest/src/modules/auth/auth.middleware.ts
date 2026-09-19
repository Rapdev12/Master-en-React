import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../../shared/Error/AppError";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("LLEGÓ AL AUTH MIDDLEWARE");
  const authHeader = req.headers.authorization;
  

  // si no vino el header, o no tiene el formato "Bearer <token>", cortamos acá.
  // Todavía no sabemos quién es esta persona -> 401, no 403.
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Unauthorized, missing token", 401));
  }

  const token = authHeader.slice(7); // nos quedamos solo con el token, sin el "Bearer "

  try {
    // jwt.verify necesita el mismo secret con el que se firmó en auth.service.ts,
    // si no coincide o el token fue alterado, tira una excepción acá mismo
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };

    req.user = { id: decoded.id }; 

    next(); 
  } catch (error) {
    // jwt.verify puede tirar TokenExpiredError o JsonWebTokenError, entre otros.
    // Para este proyecto los tratamos igual: token inválido = 401.
    next(new AppError("Invalid or expired token", 401));
  }
};
import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authController } from "./auth.controller";
import { loginSchema } from "./auth.schema";



const router = Router();

router.post ("/login", validate(loginSchema), authController.userLogin)


export default router;
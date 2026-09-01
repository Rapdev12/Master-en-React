import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema } from "./user.schema";
import { userController } from "./user.controller";

const router = Router();

router.post("/create", validate(createUserSchema), userController.create);

export default router;

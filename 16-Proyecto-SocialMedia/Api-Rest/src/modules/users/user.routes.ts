import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema, getUserByIdSchema } from "./user.schema";
import { userController } from "./user.controller";

const router = Router();

router.post("/create", validate(createUserSchema), userController.create);
router.get("/:id", validate(getUserByIdSchema), userController.getById);

export default router;

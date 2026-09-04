import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema, getUserByIdSchema } from "./user.schema";
import { userController } from "./user.controller";

const router = Router();

router.post("/create", validate(createUserSchema), userController.create);
router.get("/all", userController.getAll);
router.get("/:id", validate(getUserByIdSchema), userController.getById);
router.delete("/:id", validate(getUserByIdSchema), userController.deleteUser )

export default router;

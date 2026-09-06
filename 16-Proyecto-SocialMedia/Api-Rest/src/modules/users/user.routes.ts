import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema, getUserByIdSchema, updateUserSchema } from "./user.schema";
import { userController } from "./user.controller";

const router = Router();

router.post("/create", validate(createUserSchema), userController.create);
router.get("/all", userController.getAll);
router.get("/:id", validate(getUserByIdSchema), userController.getById);
router.delete("/:id", validate(getUserByIdSchema), userController.deleteUser );
router.patch("/:id", validate(updateUserSchema), userController.updateUser);

export default router;

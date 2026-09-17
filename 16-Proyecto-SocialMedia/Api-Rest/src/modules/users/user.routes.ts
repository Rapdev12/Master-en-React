import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema, getUserByIdSchema, updateUserSchema } from "./user.schema";
import { userController } from "./user.controller";
import { authMiddleware } from "../auth/auth.middleware";
import { uploadPublicationFiles, uploadUserImage} from "../../middlewares/upload.middleware";


const router = Router();

router.post("/create", uploadUserImage, validate(createUserSchema), userController.create);
router.get("/all", userController.getAll);
router.get("/:id", validate(getUserByIdSchema), userController.getById);
router.delete("/:id",authMiddleware, validate(getUserByIdSchema), userController.deleteUser );
router.patch("/:id", authMiddleware, uploadUserImage, validate(updateUserSchema), userController.updateUser);

export default router;

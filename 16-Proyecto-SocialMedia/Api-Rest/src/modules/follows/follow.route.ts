import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { createFollowSchema, getFollowSchema, deleteFollowSchema } from "./follow.schema";
import { followController } from "./follow.controller";
import { authMiddleware } from "../auth/auth.middleware";



const router = Router();

router.get("/following/:id", validate(getFollowSchema), followController.getFollowing);
router.get("/follower/:id", validate(getFollowSchema), followController.getFollowers);
router.post("/create", validate(createFollowSchema), authMiddleware, followController.newFollow);
router.delete("/:followed",  validate(deleteFollowSchema), authMiddleware, followController.deleteFollow);

export default router;
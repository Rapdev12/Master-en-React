import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../auth/auth.middleware";
import { publicationController } from './publication.controller';
import { createPublicationSchema, deletePublicationSchema, updatePublicationSchema } from "./publication.schema";
import {uploadPublicationFiles} from "../../middlewares/upload.middleware"



const router = Router();

router.get("/", publicationController.getAllPublications);
router.get("/user/:id", validate(deletePublicationSchema), publicationController.getPublicationsByUser);
router.get("/:id", validate(deletePublicationSchema), publicationController.getPublicationById);
router.post("/create",authMiddleware, uploadPublicationFiles,  validate(createPublicationSchema), publicationController.createPublication);
router.patch("/:id",authMiddleware, uploadPublicationFiles, validate(updatePublicationSchema), publicationController.updatePublication);
router.delete("/:id",authMiddleware, validate(deletePublicationSchema), publicationController.deletePublication);

export default router;
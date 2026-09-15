import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../auth/auth.middleware";
import { publicationController } from './publication.controller';
import { createPublicationSchema, deletePublicationSchema, updatePublicationSchema } from "./publication.schema";




const router = Router();

router.get("/", publicationController.getAllPublications);
router.get("/user/:id", validate(deletePublicationSchema), publicationController.getPublicationsByUser);
router.get("/:id", validate(deletePublicationSchema), publicationController.getPublicationById);
router.post("/create", validate(createPublicationSchema),authMiddleware ,publicationController.createPublication);
router.patch("/:id", validate(updatePublicationSchema), authMiddleware, publicationController.updatePublication);
router.delete("/:id", validate(deletePublicationSchema), authMiddleware, publicationController.deletePublication);
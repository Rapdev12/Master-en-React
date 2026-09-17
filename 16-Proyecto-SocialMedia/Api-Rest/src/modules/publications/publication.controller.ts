import { Request, Response, NextFunction } from "express";
import { publicationService } from "./publication.service";
import { AppError } from "../../shared/Error/AppError";


export const publicationController = {
  async createPublication(req: Request, res: Response, next: NextFunction) {
    try {
      const { description } = req.body;
      const user = req.user!.id;
      const files = (req.files as Express.Multer.File[])?.map((file) => file.filename);
      
      const publication = await publicationService.createPublication(
       user,
       description,
       files
      );

      res.status(201).json(publication);
    } catch (error) {
      next(error);
    }
  },

  async getAllPublications(req: Request, res: Response, next: NextFunction) {
    try {
      const publications = await publicationService.getAllPublications();
      res.status(200).json(publications);
    } catch (error) {
      next(error);
    }
  },

  async getPublicationsByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const publications = await publicationService.getPublicationsByUser(
        req.params.id as string,
      );
      res.status(200).json(publications);
    } catch (error) {
      next(error);
    }
  },

  async getPublicationById(req: Request, res: Response, next: NextFunction) {
    try {
      const publication = await publicationService.getPublicationById(
        req.params.id as string,
      );
      res.status(200).json(publication);
    } catch (error) {
      next(error);
    }
  },
  async updatePublication(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string; // o req.params.id as string
      const { description} = req.body;
      const userId = req.user!.id;
      const files = (req.files as Express.Multer.File[])?.map((file) => file.filename);

      const publication = await publicationService.getPublicationById(id);

      if (publication.user._id.toString() !== userId) {
        return next(
          new AppError("Forbidden: you can only modify your own Publication", 403),
        );
      }

      const update = await publicationService.updatePublication(
        id,
        description,
        files,
      );
      res.status(200).json(update);
    } catch (error) {
      next(error);
    }
  },

   async deletePublication(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string; 
      const userId = req.user!.id;
      const publication = await publicationService.getPublicationById(id);

      if (publication.user._id.toString() !== userId) {
        return next(
          new AppError("Forbidden: you can only modify your own Publication", 403),
        );
      }
      const result = await publicationService.deletePublication(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};

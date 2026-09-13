import { Publication } from "./publication.model";
import { AppError } from "../../shared/Error/AppError";

export const publicationService = {
  async createPublication(user: string, description?: string, file?: string) {
    return await Publication.create({ user, description, file });
  },

  async getAllPublications() {
    // populate reemplaza el ObjectId por los datos reales del User (solo nick e image)
    const publication = await Publication.find().populate("user", "nick image");

    return publication;
  },

  async getPublicationsByUser(id: string) {
    const publication = await Publication.find({ user: id }).populate(
      "user",
      "nick image",
    );

    return publication;
  },

  async getPublicationById(id: string) {
    const publication = await Publication.findById(id).populate(
      "user",
      "nick image",
    );
    if (!publication) {
      throw new AppError("Publication is null", 404);
    }
    return publication;
  },

  async updatePublication(id: string, description?: string, file?: string) {
    const update = await Publication.findByIdAndUpdate(
      id,
      {
        description,
        file,
      },
      { new: true },
    );

    if (!update) {
      throw new AppError("Publication is null", 404);
    }
    return update;
  },

  async deletePublication(id: string) {
    const publication = await Publication.findByIdAndDelete(id);

    if (!publication) {
      throw new AppError("Publication not found", 404);
    }

    return { message: "Deleted Publication" };
  },
};

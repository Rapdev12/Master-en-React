import { Request, Response } from "express";
import { Article } from "../models/article.model";
import { validateArticle } from "../helpers/validateArticle";
import { validateImage } from "../helpers/validateImagen";
import fs from "fs";
import path from "path";

export const create = async (req: Request, res: Response) => {
  //Recoge paramatros por post a guardar
  let parametros = req.body;

  //Validar datos
  try {
    // 2. Limpiamos espacios con .trim() por seguridad y validamos que no estén vacíos
    validateArticle(parametros);
    //Asignar Valores a objeto basdado en el modelo (manual o automatico)

    const article = new Article(parametros);
    const articleStored = await article.save();

    //Devolver resultado
    return res.status(200).json({
      mensaje: "Saves Data",
      article: articleStored,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Incorrectly sent data",
    });
  }
};

export const searchArticle = async (req: Request, res: Response) => {
  try {
    // Usamos await para esperar a que MongoDB nos devuelva los artículos
    const articles = await Article.find({}).sort({ createdAt: -1 }).exec();

    // Si no hay artículos en la base de datos
    if (!articles || articles.length === 0) {
      return res.status(404).json({
        status: "error",
        mensaje: "No items found",
      });
    }

    // Si todo sale bien, devolvemos los artículos encontrados
    return res.status(200).json({
      status: "success",
      contador: articles.length,
      articles,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Error trying to list items",
    });
  }
};

export const searchId = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    // 1. Extraemos el id que viene en la URL (ej: /article/123456)
    const id = req.params.id;

    // 2. Buscamos el artículo por su ID con Mongoose
    const article = await Article.findById(id);

    // 3. Si Mongoose no encuentra nada, devuelve null (no es un error de código, solo no existe)
    if (!article) {
      return res.status(404).json({
        status: "error",
        mensaje: "The item with that ID was not found",
      });
    }

    // 4. Si todo sale bien, devolvemos el artículo encontrado
    return res.status(200).json({
      status: "success",
      article,
    });
  } catch (error) {
    // El catch solo se activa si hay un error crítico (ej: un ID con un formato inválido que rompa a MongoDB)
    return res.status(500).json({
      status: "error",
      mensaje: "Error searching for the item",
    });
  }
};

export const remove = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    // 1. Extraemos el id que viene en la URL
    const id = req.params.id;

    // 2. Buscamos y borramos directamente en un solo paso con Mongoose
    const articleDeleted = await Article.findOneAndDelete({ _id: id });

    // 3. Si no encuentra el artículo para borrar, devuelve null
    if (!articleDeleted) {
      return res.status(404).json({
        status: "error",
        mensaje: "The item to delete has not been found",
      });
    }

    // 4. Si todo sale bien, devolvemos un mensaje de éxito y el artículo borrado
    return res.status(200).json({
      status: "success",
      mensaje: "Delete method",
      article: articleDeleted,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Error trying to delete the article",
    });
  }
};

export const update = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    // 1. Extraemos el ID que viene en la URL
    const id = req.params.id;

    // 2. Recogemos los datos que el usuario quiere actualizar desde el body
    const parametros = req.body;

    validateArticle(parametros);
    // 3. Buscamos y actualizamos con Mongoose
    // El { new: true } le indica que nos devuelva el documento YA actualizado
    const articleUpdated = await Article.findByIdAndUpdate(id, parametros, {
      new: true,
    });

    // 4. Si no se encuentra el artículo, devolvemos un 404
    if (!articleUpdated) {
      return res.status(404).json({
        status: "error",
        mensaje: "The article to be updated was not found.",
      });
    }

    // 5. Si todo sale bien, devolvemos el artículo actualizado
    return res.status(200).json({
      status: "success",
      mensaje: "Successfully updated",
      article: articleUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Error while attempting to update the article",
    });
  }
};

export const articleImagen = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: "error",
        mensaje: "No image has been sent.",
      });
    }

    const image = req.file.originalname;
    const extension = image.split(".").pop();
    //→ validar archivo
    if (!validateImage(extension)) {
      return res.status(400).json({
        status: "error",
        mensaje: "La extensión no es válida",
      });
    }
    //→ buscar artículo
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        status: "error",
        mensaje: "Article not found",
      });
    }
    //→ obtener imagen anterior
    const oldImage = article.imagen;

    //→ actualizar MongoDB
    await Article.findOneAndUpdate(
      { _id: req.params.id },
      { imagen: req.file.filename },
      { new: true },
    );

    //→ borrar imagen anterior
    if (oldImage !== "default.png") {
      fs.unlink(`./uploads/articles/${oldImage}`, (error) => {
        if (error) {
          console.log("The previous image could not be deleted.");
        }
      });
    }
    //→ respondo
    return res.status(200).json({
      status: "success",
      mensaje: "Image uploaded successfully",
      archivo: req.file.filename,
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Error while attempting to update the article",
    });
  }
};

export const searcher = async (req: Request, res: Response): Promise<Response> => {
  try {
    const searchering = req.params.searchering;

    // Forzamos el tipo con "any" para que TypeScript no discuta con los operadores de MongoDB
    const query: any = {
      $or: [
        { title: { $regex: searchering, $options: "i" } },
        { content: { $regex: searchering, $options: "i" } }
      ]
    };

    const articles = await Article.find(query).sort({ createdAt: -1 }).exec();

    if (!articles || articles.length === 0) {
      return res.status(404).json({
        status: "error",
        mensaje: "No articles were found for your search.",
      });
    }

    return res.status(200).json({
      status: "success",
      contador: articles.length,
      articles,
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Search error",
    });
  }
};
export const imagen = (req: Request, res: Response) => {
  let filename = req.params.filename;
  let roadFilename = "./uploads/articles/" + filename;

  fs.stat(roadFilename, (error, existe) => {
    if (existe) {
      return res.sendFile(path.resolve(roadFilename));
    } else {
      return res.status(404).json({
        status: "error",
        mensaje: "The image does not exist.",
      });
    }
  });
};
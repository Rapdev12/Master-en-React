import multer, { FileFilterCallback } from "multer";
import path from "path";
import crypto from "crypto";
import { Request } from "express";

// diskStorage nos deja definir manualmente DÓNDE y CÓMO se guarda cada archivo,
// en vez de dejar que Multer decida por defecto (que guarda en memoria, sin persistir a disco)
const storage = multer.diskStorage({
  // destination decide en qué carpeta física cae el archivo
  destination: (req, file, cb) => {
    
    // __dirname acá apunta a src/middlewares/, así que subimos 2 niveles
    // (middlewares -> src -> raíz del proyecto) para llegar a uploads/
    const uploadPath = path.join(__dirname, "../../uploads");
    cb(null, uploadPath);
  },

  // filename decide con qué NOMBRE se guarda el archivo dentro de esa carpeta
  filename: (req, file, cb) => {
     console.log("ENTRÓ A FILENAME");
    // conservamos la extensión original (.jpg, .png, etc.) para que el archivo
    // siga siendo válido/reconocible al abrirlo
    const ext = path.extname(file.originalname);

    // crypto.randomUUID() genera un id único por archivo, así evitamos que
    // dos usuarios subiendo "foto.jpg" al mismo tiempo se pisen el archivo entre sí
    const uniqueName = crypto.randomUUID() + ext;

    cb(null, uniqueName);
  },
});

const fileFilter = (_req : Request, file: Express.Multer.File, cb: FileFilterCallback ) => {
    if (file.mimetype.startsWith("image/")){
      console.log("ENTRÓ A FILEFILTER", file.mimetype);
        cb (null, true);
    }else {
        cb(new Error("It is not compatible with the image format."))
    };
};
// una sola instancia de Multer configurada con nuestro storage,
// después la reusamos con .single() o .array() según el caso
const upload = multer({ storage, fileFilter,limits:{fileSize: 5242880} });

// para el perfil de usuario: un solo archivo, campo "image" en el form-data

export const uploadUserImage = upload.single("image");

// para publicaciones: varios archivos (hasta 5), campo "file" en el form-data

export const uploadPublicationFiles = upload.array("file", 5);

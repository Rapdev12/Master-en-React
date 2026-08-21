import multer from "multer";
import path from "path";

const storageImagen = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./uploads/articles/");
    },

    filename:(req, file, cb)=>{
        const extension = path.extname(file.originalname);

        cb(null, "article" + Date.now() +extension);
    }

})

export const uploads = multer({storage: storageImagen});
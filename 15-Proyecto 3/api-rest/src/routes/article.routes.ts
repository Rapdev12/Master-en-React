import { Router } from 'express';
import * as ArticleController from '../controllers/article.controller';
import { uploads } from '../middlewares/upload.middleware';


const router = Router();


//Crear la ruta

router.get("/article", ArticleController.searchArticle);
router.get("/article/:id", ArticleController.searchId);
router.get("/searcher/:searchering", ArticleController.searcher);
router.post("/create", ArticleController.create);
router.post("/subir-imagen/:id", uploads.single("file"), ArticleController.articleImagen)
router.get("/imagen/:filename", ArticleController.imagen);
router.delete("/article/:id", ArticleController.remove);
router.put("/article/:id", ArticleController.update);


export default router;

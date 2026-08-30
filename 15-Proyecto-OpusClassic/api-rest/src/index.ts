import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import articleRoutes from "./routes/article.routes";


const app = express();
const PORT = 3000;

// Ejecutamos la conexión a MongoDB
connectDB();

// 1. Configurar CORS (para permitir peticiones desde tu frontend de React)
app.use(cors());

// 2. Configurar express.json para que el servidor pueda recibir y entender JSON en el req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Rutas
app.use("/api", articleRoutes);


//Crear el servidor y escuchar las peticiones Htpp

app.get("/", (req: Request, res: Response) => {
  res.send("¡Servidor organizado y funcionando con TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
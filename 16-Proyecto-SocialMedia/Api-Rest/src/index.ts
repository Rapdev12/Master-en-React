import express, { Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import userRoutes from "./modules/users/user.routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Social network server active, organized, and running with TypeScript.");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    message: err.message || "Error interno del servidor",
  });
});

//Me aseguro que mi base de datos y mi server esten opetivo
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
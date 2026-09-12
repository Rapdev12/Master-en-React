import 'dotenv/config';
import express, { Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import userRoutes from "./modules/users/user.routes";
import { AppError } from "./shared/Error/AppError";
import authRouter from './modules/auth/auth.routes';
import followRouter from "./modules/follows/follow.route"


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRouter);
app.use("/api/follow", followRouter);



app.get("/", (req: Request, res: Response) => {
  res.send("Social network server active, organized, and running with TypeScript.");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

//Me aseguro que mi base de datos y mi server esten opetivo
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("The server could not be started.:", error);
    process.exit(1);
  }
};

startServer();
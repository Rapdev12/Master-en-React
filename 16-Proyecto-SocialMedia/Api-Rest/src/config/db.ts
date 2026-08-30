
import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb://localhost:27017/red_social");
        console.log("¡Conexión a la base de datos completada con éxito! 🚀");
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo conectar a la base de datos.");
    }
};

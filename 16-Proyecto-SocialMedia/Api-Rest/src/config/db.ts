
import mongoose from "mongoose";

// 1. Los listeners se registran primero (quedan "escuchando" desde ya) importante
// (arranque seguro + visibilidad de errores)
mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ Se perdió la conexión con MongoDB");
});

mongoose.connection.on("reconnected", () => {
  console.log("✅ MongoDB reconectado");
});

mongoose.connection.on("error", (error) => {
  console.error("❌ Error en la conexión de MongoDB:", error);
});

// 2. Recién después, la función que efectivamente conecta
export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb://localhost:27017/red_social");
        console.log("¡Conexión a la base de datos completada con éxito! 🚀");
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo conectar a la base de datos.");
    }
};

import { Schema, model, Document,Types } from "mongoose";

export interface IUser extends Document{
  _id: Types.ObjectId;
  name: string;
  nick: string;
  password: string;
  role: "admin" | "user"; // "enum" a nivel de TypeScript
  image?: string; // opcional, no todos suben foto
  created_at: Date;
   
}
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true, // quita espacios sobrantes al inicio/final
    },
    nick: {
      type: String,
      required: [true, "El nick es obligatorio"],
      unique: true, // no permite nicks repetidos
      trim: true,
      lowercase: true, // normaliza el dato, evita duplicados por mayúsculas
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
      select: false, // MUY IMPORTANTE: no se trae en los "find" por defecto
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "user"],
        message: "{VALUE} no es un rol válido",
      },
      default: "user",
    },
    image: {
      type: String,
      default: null,
    },
  },
  {
    // Con esto Mongoose maneja "created_at" y "updated_at" automáticamente
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export const User = model<IUser>("User", UserSchema);
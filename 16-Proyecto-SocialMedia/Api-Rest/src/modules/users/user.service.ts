import bcrypt from "bcrypt";
import { User } from "./user.model";
import { CreateUserInput } from "./user.schema";
import { AppError } from "../../shared/Error/AppError";

export const userService = {
  async createUser(data: CreateUserInput) {
    // 1. Chequear que el nick no exista ya
    const existingUser = await User.findOne({ nick: data.nick });
    if (existingUser) {
      throw new AppError("El nick ya está en uso", 409); //esto "lanza" el error
    }

    // 2. Hashear el password antes de guardar
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // 3. Crear el usuario con el password ya hasheado
    const newUser = await User.create({
      ...data,
      password: hashedPassword,
    });

    // 4. Nunca devolver el password, ni siquiera el hasheado
    const { password, ...userWithoutPassword } = newUser.toObject();
    return userWithoutPassword;
  },

  async getUserById(id: string) {
    const user = await User.findById(id);

    if (!user) {
      throw new AppError("Usuario no encontrado", 404);
    }

    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  },
};

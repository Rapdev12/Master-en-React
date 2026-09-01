import bcrypt from "bcrypt";
import { User } from "./user.model";
import { CreateUserInput } from "./user.schema";

export const userService = {
  async createUser(data: CreateUserInput) {
    // 1. Chequear que el nick no exista ya
    const existingUser = await User.findOne({ nick: data.nick });
    if (existingUser) {
      throw new Error("El nick ya está en uso"); //esto "lanza" el error
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
};

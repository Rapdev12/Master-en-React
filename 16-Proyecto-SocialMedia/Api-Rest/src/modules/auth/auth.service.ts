import { User } from "../users/user.model";
import { AppError } from "../../shared/Error/AppError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authServices = {
  async loginUser(nick: string, password: string) {
    const existingUser = await User.findOne({ nick }).select("+password");
    if (!existingUser) {
      throw new AppError("Incorrect username or password", 401);
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new AppError("Incorrect username or password", 401);
    }
    // Payload: SOLO el id. Nada de nick, role, ni password.
    // ¿Por qué? Si mañana cambia el nick o el role del user,
    // el token viejo seguiría diciendo el dato viejo (desincronización).
    // El id no cambia nunca, así que es el único dato "seguro" de guardar.
    const payload = { id: existingUser._id };

    // jwt.sign(payload, secret, options)
    // - payload: lo que armamos arriba
    // - process.env.JWT_SECRET: el secret que pusiste en .env
    // - expiresIn: "45m" → después de 45 min, el token deja de ser válido
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      { expiresIn: "45m" }
    );

    // Devolvemos el token al controller, que después lo devuelve al cliente
    return { token };
},
}
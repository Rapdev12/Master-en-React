import { User } from "../users/user.model";
import { AppError } from "../../shared/Error/AppError";
import bcrypt from "bcrypt";

export const authServices = {
  async loginUser(nick: string, password: string) {
    const existingUser = await User.findOne({ nick });
    if (!existingUser) {
      throw new AppError("Incorrect username or password", 401);
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new AppError("Incorrect username or password", 401);
    }
    return { mensaje: "login susccess" };
  },
};

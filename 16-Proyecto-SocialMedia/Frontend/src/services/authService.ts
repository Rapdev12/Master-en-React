import { Global } from '../helpers/Global';
import { Petitions } from '../helpers/Petitions';
import type { User } from '../types';

// Forma real de la respuesta de /auth/login (ya con el user que añadimos al backend)
export interface LoginResponse {
  status?: string;
  message?: string;
  token?: string;
  user?: User;
}

export const loginUser = async (
  nick: string,
  password: string
): Promise<LoginResponse | null> => {
  const { information } = await Petitions<LoginResponse>(
    `${Global.url}auth/login`,
    'POST',
    { nick, password }
  );
  return information;
};

export const registerUser = async (userData: Record<string, unknown>) => {
  const { information } = await Petitions(
    `${Global.url}user/create`,
    'POST',
    userData
  );
  return information;
};
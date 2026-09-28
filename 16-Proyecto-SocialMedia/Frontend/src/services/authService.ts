import { Global } from '../helpers/Global';
import { Petitions } from '../helpers/Petitions';

export const loginUser = async (nick: string, password: string) => {
  const { information } = await Petitions(
    Global.url + 'auth/login',
    'POST',
    { nick, password }
  );
  return information;
};

export const registerUser = async (userData: Record<string, unknown>) => {
  const { information } = await Petitions(
    Global.url + 'user/create',
    'POST',
    userData
  );
  return information;
};
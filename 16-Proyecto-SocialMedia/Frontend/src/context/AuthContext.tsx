import { createContext } from 'react';
import type { User } from '../types/index';

export type { User };   // así `import type { User } from '../../context/AuthContext'` sigue funcionando

export interface AuthContextType {
  token: string | null;
  user: User | null;
  isAuth: boolean;
  login: (token: string, user?: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
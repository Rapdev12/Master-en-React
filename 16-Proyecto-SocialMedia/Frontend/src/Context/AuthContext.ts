import { createContext } from 'react';
import type { User } from '../types';

// 1. Definimos la forma/tipo de los datos que compartiremos
export interface AuthContextType {
  user: User | null;
  login: (userData?: User) => void;
  logout: () => void;
}

// 2. Creamos el contexto (la "antena" global)
export const AuthContext = createContext<AuthContextType | undefined>(undefined);


import React, { useState } from 'react';
import type { User } from '../types';
import { currentUser as mockUser } from '../data/data';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // 1. Estado local que guarda el usuario autenticado (inicia con mockUser)
  const [user, setUser] = useState<User | null>(mockUser);

  // 2. Función para iniciar sesión
  const login = (userData?: User) => {
    setUser(userData || mockUser);
  };

  // 3. Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  // 4. Retornamos el proveedor enviando los valores a través de 'value'
  return (
    <AuthContext.Provider value={{ user: user, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
};
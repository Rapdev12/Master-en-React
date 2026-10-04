import  { useState } from 'react';
// 🟢 Usamos 'import type' para los tipos de React y de tu Contexto
import type { ReactNode } from 'react';
import type { User } from './AuthContext';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('token');
  });

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return !!localStorage.getItem('token');
  });

  const login = (newToken: string, userData?: User) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setIsAuth(true);

    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setToken(null);
    setUser(null);
    setIsAuth(false);
  };
  // en AuthProvider, justo antes del return:
console.log('PROVIDER render → user:', user);
  return (
    <AuthContext.Provider value={{ token, user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
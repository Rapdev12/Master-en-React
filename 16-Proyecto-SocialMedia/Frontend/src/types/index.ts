// src/types/index.ts
export interface User {
  _id?: string;
  name?: string;
  nick: string;
  role?: 'admin' | 'user';        // 👈 tu enum real, no un string cualquiera
  image?: string | null;          // 👈 el schema hace default: null
  displayName?: string;           // 👈 existe en tu modelo
  biography?: string;             // 👈 era "bio", no coincide con el backend
  created_at?: string;
}

export interface Publication {
  _id: string;
  text: string;
  file?: string;
  user: User;
  created_at: string;
}
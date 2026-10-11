// src/types/index.ts

export interface User {
  _id?: string;
  name?: string;
  nick: string;
  role?: 'admin' | 'user';
  image?: string | null;
  displayName?: string;
  biography?: string;
  created_at?: string;
}

// ✅ Cambio 1: file pasa de string a string[] (el backend manda array)
export interface Publication {
  _id: string;
  text: string;
  file?: string[];          // 🔄 antes: file?: string
  user: User;
  created_at: string;
}

// ✅ NUEVO: tipo "raw" que refleja EXACTAMENTE lo que devuelve el backend.
//    Solo lo usa postService.ts internamente para traducir.
//    Ningún componente de UI debería importar esto.
export interface RawPublication {
  _id: string;
  description: string | null;   // 👈 backend lo llama "description", no "text"
  user: {
    _id: string;
    nick: string;
    image?: string | null;
  };
  file?: string[];              // 👈 array de nombres de archivo
  created_at: string;
  updated_at?: string;
  __v?: number;
}
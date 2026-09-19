// src/types/index.ts

// 1. Contrato de Usuario
export interface User {
  _id: string;
  name: string;
  nick: string;
  email: string;
  bio?: string;
  image?: string;
  created_at?: string;
}

// 2. Contrato de Publicación (lo que aparece en el feed/muro)
export interface Publication {
  // Identificador único de la publicación en la base de datos
  _id: string;

  // El texto o mensaje que escribió la persona
  text: string;

  // Imagen o archivo adjunto opcional de la publicación
  file?: string;

  // Relación: aquí conectamos la publicación con el autor
  // Gracias a TypeScript, ahora tu editor sabe que publication.user.name existe y es un string
  user: User;

  // Fecha y hora en que se publicó (para ordenar el feed de más nuevo a más viejo)
  created_at: string;
}
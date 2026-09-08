// declaration merging: le decimos a TypeScript que la interfaz Request
// de Express también puede tener una propiedad opcional "user"
declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

export {}; // necesario para que TS trate este archivo como módulo y no como script global
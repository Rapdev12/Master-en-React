


export class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message); // le pasamos el mensaje al Error "padre" (nativo de JS)
    this.statusCode = statusCode;
  }
}

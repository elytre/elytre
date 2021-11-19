export default class CustomError extends Error {
  constructor(template: string, error: unknown) {
    if (error instanceof Error) {
      const message = template.replace('%message%', error.message);
      super(message);
      this.stack = error.stack;
    }
  }
}

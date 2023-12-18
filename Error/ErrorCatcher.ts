import { NextFunction, Request, Response } from "express";

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

class ErrorCatcher extends CustomError {
  constructor(error: Error, req: Request, res: Response, next: NextFunction) {
    super(error.message);
    res.status(500).json({ message: error.message });
    next(error);
  }
}

const ErrorHandlers = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(500).json({ message: err.message });
  }
  next(err);
};

export { ErrorCatcher, ErrorHandlers };

import { Request, Response, NextFunction } from "express";

const ErrorHandlers = new Map([
  [
    404,
    (req: Request, res: Response) => {
      res.status(404).render("404 Not Found");
    },
  ],
  [
    500,
    (req: Request, res: Response) => {
      res.status(500).render("Internal Server Error");
    },
  ],
  [
    400,
    (req: Request, res: Response) => {
      res.status(400).render("Bad Request");
    },
  ],
  [
    401,
    (req: Request, res: Response) => {
      res.status(401).render("Unauthorized");
    },
  ],
  [
    403,
    (req: Request, res: Response) => {
      res.status(403).render("Forbidden");
    },
  ],
  [
    405,
    (req: Request, res: Response) => {
      res.status(405).render("Method Not Allowed");
    },
  ],
  [
    409,
    (req: Request, res: Response) => {
      res.status(409).render("Conflict");
    },
  ],
  [
    422,
    (req: Request, res: Response) => {
      res.status(422).render("Unprocessable Entity");
    },
  ],
  [
    429,
    (req: Request, res: Response) => {
      res.status(429).render("Too Many Requests");
    },
  ],
  [
    503,
    (req: Request, res: Response) => {
      res.status(503).render("Service Unavailable");
    },
  ],
]);

const ErrorCatcher = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const error = ErrorHandlers.get(status);
  if (error) {
    error(req, res);
  } else {
    res.status(500).render("Internal Server Error");
  }
};

export { ErrorCatcher, ErrorHandlers };

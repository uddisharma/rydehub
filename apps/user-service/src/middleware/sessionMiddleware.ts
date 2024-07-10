import { Request, Response, NextFunction } from "express";

export const sessionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.session && req.session.user) {
    req.sessionData = req.session.user;
  }
  next();
};

declare global {
  namespace Express {
    interface Request {
      sessionData?: { username: string };
    }
  }
}

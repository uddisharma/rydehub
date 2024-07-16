import { NextFunction } from "express";

export function HandleError(err: any, next: NextFunction) {
  const error: any = new Error(err.message || "Something went wrong!");
  error.status = err.status || 500;
  next(error);
}

import rateLimit from "express-rate-limit";
import { HandleError } from "./error-handler";
import { NextFunction, Request, Response } from "express";

export const RateLimiter: any = rateLimit({
  windowMs: 1 * 1000,
  max: 10,
  message: "Too many requests from this IP, please try again after a second.",
  handler: (req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Too many requests, please try again later.");
    HandleError(error, next);
  },
});

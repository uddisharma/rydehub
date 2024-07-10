import { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';

export const cookieMiddleware = cookieParser();

export const customCookieMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.cookiesData = req.cookies;
    next();
};

declare global {
    namespace Express {
        interface Request {
            cookiesData?: { [key: string]: string };
        }
    }
}

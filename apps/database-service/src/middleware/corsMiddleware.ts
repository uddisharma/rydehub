
import cors from 'cors';
import { RequestHandler } from 'express';

export const corsOptions: RequestHandler = cors({
    origin: process.env.ORIGIN || 'http://localhost:3000',
    credentials: true
});

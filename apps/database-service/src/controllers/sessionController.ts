import { Request, Response } from 'express';

export const setSession = (req: Request, res: Response) => {
    if (!req.session.user) {
        req.session.user = { username: req.body.username };
        res.send('Session variable set');
    } else {
        res.send('Session variable already set');
    }
};

export const getSession = (req: Request, res: Response) => {
    if (req.session.user) {
        res.json({ username: req.session.user.username });
    } else {
        res.status(401).send('Not logged in');
    }
};

export const destroySession = (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send('Failed to destroy session');
        } else {
            res.send('Session destroyed');
        }
    });
};

export const getCookies = (req: Request, res: Response) => {
    res.json({ cookies: req.cookies });
};

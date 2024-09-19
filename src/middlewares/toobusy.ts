import { NextFunction, Request, Response } from 'express';
import toobusy from 'toobusy-js';

const tooBusyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (toobusy()) {
        res.status(503).send('Server too busy!');
    } else {
        next();
    }
};
export default tooBusyMiddleware;

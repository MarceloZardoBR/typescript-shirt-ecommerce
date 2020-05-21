import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../config/authSecret';

export interface IReq extends Request {
    userId?: string
}

interface IDecode {
    id: string;
}

export default {
    
    authorization(req: IReq, res: Response, next: NextFunction) {
        const authHeader: string = req.headers.authorization!;

        if (!authHeader) {
            res.status(401).send({ error: 'No token provider' });
        }

        const parts: Array<string> = authHeader.split(' ');

        if (parts.length !== 2){
            res.status(401).send({ error: 'Token Error' });
        }
        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            res.status(401).send({ error: 'Token malformatted' });
        }

        try{
            const decoded:any = jwt.verify(token, secret);
            req.userId = decoded.id;
        }catch(err){
            res.status(401).send('Invalid token');
        }

        return next();
    }
}

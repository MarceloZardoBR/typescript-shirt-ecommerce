import { Request, Response } from 'express';

import { IReq } from '../middlewares/auth';

export default {

    async menuRouter(req: IReq, res: Response){
        res.send({ok: true, user: {id: req.userId}});
    }
}
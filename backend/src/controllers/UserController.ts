import { Request, Response } from 'express';
import UserModel from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IUser } from '../commons/types';
import { secret } from '../config/authSecret';
import { IReq } from '../middlewares/auth';
import User from '../models/User';

const generateToken = (id:number):string =>{
    return jwt.sign({ id: id}, secret, {
        expiresIn: 86400
    });
};

export default {

    async createUser(req: Request, res: Response) {

        const emailUser = await UserModel.findOne({ email: req.body.email });

        if (emailUser) {
            res.send().status(502);
        }

        const password: string = await bcrypt.hash(req.body.password,10);

        const user:IUser = {
            name: req.body.name,
            email: req.body.email,
            password: password
        };

        
        UserModel.create(user).then(response => {
            delete response.password
            res.send({
                response,
                token: generateToken(response._id)
            });
        }).catch(err => {
            console.log(err);
        })

    },

    async authUser(req: Request, res: Response){

        const { email, password } = req.body;

        const user = await UserModel.findOne({email}).select('+password');

        if(!user){
            res.status(400).send({error: 'User not found!'});
        }

        if(!await bcrypt.compare(password, user!.password)){
            res.status(400).send({ error: 'Invalid Password'});
        }

        user!.password = '';

        const token = jwt.sign({ id: user?._id}, secret, {
            expiresIn: 86400
        });

        res.send({
            id: user?._id,
            token: generateToken(user!._id)
        });
    },

    async getUser(req: IReq, res: Response){
        
        const user = await UserModel.findOne({_id: req.userId}, (err) =>{
            if(err){
                res.status(500).send(err);
            }
        });

        res.send(user)

    },

    async addProductToCart(req: IReq, res: Response){

        const { product_id } = req.body;
        const user_id = req.userId;
        UserModel.findOneAndUpdate({
            _id: user_id
        },{
            $push:{'cart.itens': product_id}
        },{upsert: true, new: true},
        (err, any) => {
            if(err){
                res.status(500).send(err);
            }else if(any){
                res.status(200).send('OK');
            }
        });

    },

    async removeCartProduct(req: IReq, res: Response){

        const { product_id } = req.body;
        const user_id = req.userId;

        UserModel.findOneAndUpdate({_id: user_id},
            { $pull:{ 'cart.itens': product_id }
        },(err, doc) => {
            if(err){
                res.status(500).send(err);
            }
            else if (doc){
                res.status(200).send('OK');
            }
        })

    }
    
}
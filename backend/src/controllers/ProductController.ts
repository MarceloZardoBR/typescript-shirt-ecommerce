import ProductModel from '../models/Products';
import { Request, Response } from 'express';

import { IProduct } from '../commons/types';

export default {

    async createProduct(req: Request, res: Response) {

        const products: IProduct[] = req.body.products;

        await ProductModel.create(...products)
            .catch(err => {
                res.status(500).send(err)
            })

    },

    async getAllProducts(req: Request, res:Response){

        const Products = await ProductModel.find();

        if(Products){
            res.send(Products);
        }else{
            res.status(500).send('error');
        }
    },

    async getProductById(req: Request, res:Response){

        const { product_id } = req.query;

        const product = await ProductModel.findOne({'_id': product_id});
        
        if(!product){
            res.status(404).send('Not Found');
        }else {
            res.send(product);
        }
    },

    async getListProducts(req: Request, res:Response){

        const { products_id } = req.query;

        ProductModel.find({'_id':{ $in: products_id }},(err, response) => {
            if(err){
                res.status(500).send(err);
            }else{
                res.send(response);
            }
        })
    },

    async searchProducByName(req: Request, res:Response){

        const { product_name } = req.query;

        ProductModel.find({$text:{$search: product_name, $caseSensitive: false}}).exec((err, doc) => {
            if(err){
                res.status(500).send(err);
            }else if(doc){
                res.status(200).send(doc);
            }
        });

    }
}
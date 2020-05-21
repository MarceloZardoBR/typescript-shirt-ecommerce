import express, {Request, Response, NextFunction} from 'express';
const routes = express.Router();

import UserController from './controllers/UserController';
import ProductController from './controllers/ProductController';
import MenuController from './controllers/MenuController';
import Authorization from './middlewares/auth';

routes.post('/user/create', UserController.createUser);
routes.post('/user/auth', UserController.authUser);
routes.post('/products/create', ProductController.createProduct);
routes.get('/products/get/all', ProductController.getAllProducts);
routes.get('/products/get/', ProductController.getProductById);
routes.get('/products/get/list', ProductController.getListProducts);
routes.get('/products/search/', ProductController.searchProducByName);

routes.use(Authorization.authorization);

routes.get('/user/get', UserController.getUser);
routes.post('/user/cart/set-products', UserController.addProductToCart);
routes.post('/user/cart/remove-product', UserController.removeCartProduct);

export default routes;
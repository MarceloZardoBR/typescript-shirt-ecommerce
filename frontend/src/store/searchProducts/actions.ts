/* eslint-disable no-unused-vars */
import {
    SearchedProductsTypes
} from './types';
import { IProduct } from '../../commons/types';

export const searchedProducts = (products: IProduct) => {
    return {
        type: SearchedProductsTypes.GET_SEARCHED_PRODUCTS,
        payload: products
    }
}
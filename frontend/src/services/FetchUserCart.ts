/* eslint-disable no-unused-vars */
import axios from 'axios';
import { BASE_URL } from '../commons/baseURL';
import { IProduct } from '../commons/types';

export const fetchUserCart = (token: String):IProduct[] =>{

    const products: IProduct[] = [];

    axios.get(`${BASE_URL}/user/get`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        axios.get(`${BASE_URL}/products/get/list`,{
            params:{
                products_id: res.data.cart.itens
            }
        }).then(res => {
            products.push(...res.data);
        }).catch(err => console.log(err))
    }).catch(err => console.log(err));

    return products;
}
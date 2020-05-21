/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './ViewProduct.css'

import axios from 'axios';
import HeaderViewProduct from './HeaderViewProduct';
import arrow from '../../assets/imgs/left-arrow.svg';
import { BASE_URL } from '../../commons/baseURL';
import { RouteComponentProps } from 'react-router-dom';
import { IProduct } from '../../commons/types';

interface OwnProps {
    id?: string
    user_id: string
}

const ViewProduct: React.FC<RouteComponentProps<OwnProps>> = ({match, history}) =>{
    
    const product_id: string = match.params.id!;
    const [product, setProduct] = useState<IProduct>();
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`${BASE_URL}/products/get/`,{
            params:{
                product_id
            }
        })
            .then(res => {
                setProduct(res.data);
            }).catch(err => {
                alert(err);
            })
    },[product_id])

    const onHandleReturn = () =>{
        history.goBack()
    }

    const onAddToCart = (product_id: String) =>{
        axios.post(`${BASE_URL}/user/cart/set-products`,{
            product_id
        },{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            alert('Produto Adicionado com Sucesso');
        }).catch(err => {
            console.log(err.response);
        });
    }

    return(
        <div className='main-view-container'>
            <HeaderViewProduct />
            <div className='return-arrow-ctn'>
                <button onClick={onHandleReturn}>
                    <img src={arrow} />
                </button>
                <p>Retornar</p>
            </div>
            <div className="view-prd-container">
                <img src={product?.photo} />
                <div className="desc-prd-container">
                    <p>{product?.name}</p>
                    <footer>
                        <p>Tamanho: {product?.size}</p>
                        <p>Preço: R$ {product?.price}</p>
                    </footer>
                    <button onClick={() => onAddToCart(product!._id)}>Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct;
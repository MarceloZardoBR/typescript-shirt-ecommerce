/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

import './CartCheckout.css';
import { IProduct } from '../../commons/types';
import { BASE_URL } from '../../commons/baseURL';
import HeaderViewProduct from '../Products/HeaderViewProduct';
import Cross from '../../assets/imgs/cross-icon.svg';

const CartCheckout: React.FC<RouteComponentProps> = ({ history }) => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const token: String = localStorage.getItem('token')!;

    const getUserCart = () => {
        axios.get(`${BASE_URL}/user/get`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            axios.get(`${BASE_URL}/products/get/list`, {
                params: {
                    products_id: res.data.cart.itens
                }
            }).then(res => {
                setProducts(res.data);
            }).catch(err => console.log(err.response.data))
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getUserCart();
    }, []);

    const onHandleCancel = () =>{
        history.goBack();
    }

    const onHandleRemoveItem = async (_id: String) =>{
        axios.post(`${BASE_URL}/user/cart/remove-product`,{
            product_id: _id
        },{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            if(res){
                getUserCart(); 
            }
        }).catch(err => {
            console.log(err.response);
        })
    }

    return (
        <div className='cart-container'>
            <HeaderViewProduct />
            <div className="cart-main-container">
                <div className="display-prd-ctn">
                    {products.length > 0 ? (
                        <ul>
                            {products.map(product => (
                                <li key={product._id}>
                                    <img src={product.photo} />
                                    <footer>
                                        <p>{product.name}</p>
                                        <p>Preço: R$ {product.price}</p>
                                        <p>Tamanho: {product.size}</p>
                                    </footer>
                                    <button onClick={() => onHandleRemoveItem(product._id)}>
                                        <img src={Cross} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                            <p>Você não possui nenhum produto no carrinho..</p>
                        )}
                </div>
                <div className="cart-details">
                    <h2>Detalhe Dos Pedido</h2>
                    <p>Quantidade: {products.length}</p>
                    <h4>Total: R$ {products.reduce((a,b) => a + parseInt(b.price), 0)}</h4>
                    <button>Finalizar Compra</button>
                    <button onClick={onHandleCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default CartCheckout;
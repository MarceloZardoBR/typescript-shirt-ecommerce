/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import axios, { AxiosResponse } from 'axios';

import './Main.css';
import { BASE_URL } from '../../commons/baseURL';
import { IProduct } from '../../commons/types';
import ProductPreview from '../../components/ProductPreview';
import Header from '../../components/Header';


const Main: React.FC<RouteComponentProps> = () => {

    const [products, setProducts] = useState<IProduct[]>();

    const fetchProducts = useCallback(async () => {
        axios.get(`${BASE_URL}/products/get/all`)
            .then((res: AxiosResponse<IProduct[]>) => {
                setProducts(res.data);
            }).catch(err => console.log(err));

    }, [])

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])  

    return (
        <div className="main-content">
            <Header />
            <ProductPreview products={products!} />
        </div>

    )
}

export default Main;
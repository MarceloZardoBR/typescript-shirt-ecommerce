/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router';

import './SearchedProducts.css';
import { IProduct } from '../../commons/types';
import ProductPreview from '../../components/ProductPreview';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import { State } from '../../store/storeConfig'

interface OwnProps {
    products?: IProduct[]
}

type Props = OwnProps & any;

const SearchedProducts: React.FC<RouteComponentProps<Props>> = () => {

    const products: Props = useSelector<State>(state => state.products.products);
    const [stateProducts, setStateProducts] = useState<IProduct[]>();

    useEffect(() => {
        setStateProducts(products);
    }, [products])  

    return (
        <div className="main-content">
            <Header />
            <ProductPreview products={stateProducts!} />
        </div>

    )
}

export default SearchedProducts;
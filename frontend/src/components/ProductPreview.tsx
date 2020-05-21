/* eslint-disable no-unused-vars */
import React from 'react';

import './ProductPreview.css';

// eslint-disable-next-line no-unused-vars
import { IProduct } from '../commons/types';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

interface OwnProps {
    products: IProduct[]
}

type Props = OwnProps & RouteComponentProps;

const ProductPreview = (props: Props) => {

    const onSelectProduct = (id: string) =>{
        props.history.push(`/product/view/${id}`);
    }

    return (
        <div className="main-container">
            {props.products ? (
                <ul>
                    {props.products.map((product) => (
                        <li key={product._id} onClick={() => onSelectProduct(product._id)}>
                            <img src={product.photo} />
                            <footer>
                                <strong>{product.name}</strong>
                                <p>R$ {product.price}</p>
                                <p>Tamanho: {product.size}</p>
                            </footer>
                        </li>
                    ))}
                </ul>
            ) : (
                    <p>Infelizmente estamos sem produto na loja</p>
                )}
        </div>
    )

}

export default withRouter(ProductPreview);
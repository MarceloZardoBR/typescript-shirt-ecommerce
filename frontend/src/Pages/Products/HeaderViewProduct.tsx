/* eslint-disable no-unused-vars */
import React from 'react';
import './HeaderViewProduct.css';

import { withRouter, RouteChildrenProps } from 'react-router';
import cart from '../../assets/imgs/cart-icon.svg';
import user from '../../assets/imgs/user-icon.svg';

type Props = RouteChildrenProps;

const HeaderViewProduct = (props: Props) => {
    return(
        <div className='main-view-prd-header'>
            <div className="buttons-view-prd-header">
                <button onClick={() => props.history.push('/user/cart/')}>
                    <img src={cart} />
                </button>
                <button onClick={() => props.history.push('/user/profile/')}>
                    <img src={user} />
                </button>
            </div>
        </div>
    )
}

export default withRouter(HeaderViewProduct);
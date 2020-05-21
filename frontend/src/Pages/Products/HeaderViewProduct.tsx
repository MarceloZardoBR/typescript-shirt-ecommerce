import React from 'react';
import './HeaderViewProduct.css';

import { withRouter } from 'react-router';
import cart from '../../assets/imgs/cart-icon.svg';
import user from '../../assets/imgs/user-icon.svg';

const HeaderViewProduct = () => {
    return(
        <div className='main-view-prd-header'>
            <div className="buttons-view-prd-header">
                <button >
                    <img src={cart} />
                </button>
                <button >
                    <img src={user} />
                </button>
            </div>
        </div>
    )
}

export default withRouter(HeaderViewProduct);
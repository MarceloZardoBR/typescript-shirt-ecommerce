/* eslint-disable no-unused-vars */
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './Header.css';

import { RouteChildrenProps } from 'react-router-dom'
import { withRouter } from 'react-router';
import { BASE_URL } from '../commons/baseURL';
import { useDispatch } from 'react-redux';

import user from '../assets/imgs/user-icon.svg';
import cart from '../assets/imgs/cart-icon.svg';
import search from '../assets/imgs/search-icon.svg';
import { IUser } from '../commons/types';
import { Dispatch } from 'redux';
import { searchedProducts } from '../store/searchProducts/actions';


type Props = RouteChildrenProps;

const Header = (props: Props) => {

    const token = localStorage.getItem('token');
    const [userData, setUserData] = useState<IUser>();
    const [searchValue, setSearchValue] = useState('');
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            axios.get(`${BASE_URL}/user/get`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                setUserData(res.data);
            }).catch(err => alert(err));
        }
    }, [token])

    const handleProfileButton = (): void => {
        props.history.push('/user/profile/');
    }

    const handleCartButton = (): void => {
        props.history.push(`/user/cart/`);
    }

    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.get(`${BASE_URL}/products/search/?product_name=${searchValue}`)
            .then(res => {
                dispatch(searchedProducts(res.data));
                props.history.push('/products/searched/');
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="main-header">
            <div className="search-header">
                <img src={search} />
                <form onSubmit={onSubmitSearch}>
                    <input placeholder={'Pesquisar'} value={searchValue}
                        onChange={onChangeSearchValue}
                    />
                </form>
            </div>
            <div className="buttons-header">
                <button onClick={handleCartButton}>
                    <img src={cart} />
                </button>
                <button onClick={handleProfileButton}>
                    <img src={user} />
                </button>
            </div>
        </div>
    )
}

export default withRouter(Header);
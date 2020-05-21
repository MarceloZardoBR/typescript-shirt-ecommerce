/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { RouteComponentProps } from "react-router";
import axios from 'axios';
import { BASE_URL } from '../commons/baseURL';

import './Login.css';

interface IUser {
    email: string,
    password: string,
}

const Login: React.FC<RouteComponentProps> = (props) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            axios.get(`${BASE_URL}/user/get`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                props.history.push(`/main/`);
            })
        }
        return
    }, [])

    const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: IUser = {
            email: email,
            password: password
        }

        axios.post(`${BASE_URL}/user/auth`, {
            email: user.email,
            password: user.password
        }).catch(err => console.log(err))
            .then(res => {
                if (res) {
                    const { id, token } = res.data;
                    localStorage.setItem('token', token);

                    props.history.push(`/main/:${id}`);
                }
            })
    }

    const onHandleRegister = () => {
        props.history.push('/user/create');
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-container">
            <div className="login-form-container">
                <form onSubmit={onHandleSubmit}>
                    <input placeholder='Email' value={email} onChange={onChangeEmail} />
                    <input type='password' placeholder='Senha' value={password} onChange={onChangePassword} />
                    <button type='submit'>Login</button>
                    <button onClick={onHandleRegister}>Registrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
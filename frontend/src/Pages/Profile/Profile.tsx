/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useCallback, useState } from 'react';
import axios, { AxiosResponse} from 'axios';
import { RouteChildrenProps } from 'react-router-dom';

import './Profile.css';
import { IUser } from '../../commons/types';

const Profile: React.FC<RouteChildrenProps> = ({ history }) => {

    const token = localStorage.getItem('token');
    const [user, setUser] = useState<IUser>();

    const getUser = useCallback((token: string):void =>{
        if (token !== null) {
            axios.get('http://localhost:3333/user/get', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res:AxiosResponse<IUser>) => {
                setUser(res.data);
            }).catch(err => {
                if(err.response.status){
                    history.push('/');
                }
            });
        }else{
            history.push('/');
        }
    },[history, token])

    useEffect(() => {
        getUser(token!);
    }, [getUser]);

    const onHandleEditUser = () =>{
        history.push( `/user/edit/`);
    }

    const onHandleReturn = () =>{
        history.goBack();
    }

    const onHandleLogout = async () =>{
        await localStorage.removeItem('token');

        history.push('/');
    }

    return (
        <div className="main-container">
            <img src={'https://image.flaticon.com/icons/svg/21/21104.svg'} alt='Profile Image' />
            <div className="info-container">
                <strong>{user?.name}</strong>
                <p>{user?.email}</p>
                <button onClick={onHandleEditUser}>Editar</button>
                <button onClick={onHandleLogout}>Logout</button>
            </div>
            <div className="return-button-ctn">
                <button onClick={onHandleReturn}>Voltar</button>
            </div>
        </div>
    )

}

export default Profile;
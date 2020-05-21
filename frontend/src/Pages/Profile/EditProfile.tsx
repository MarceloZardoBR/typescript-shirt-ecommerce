/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';

import { RouteChildrenProps } from 'react-router';
import axios, { AxiosResponse} from 'axios';
import { IUser } from '../../commons/types';
import './EditProfile.css';

const EditProfile: React.FC<RouteChildrenProps> = ({ history }) =>{

    const [user, setUser] = useState<IUser>();
    const token = localStorage.getItem('token');

    const getUser = useCallback((token: string):void =>{
        if (token !== null) {
            axios.get('http://localhost:3333/user/get', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res:AxiosResponse<IUser>) => {
                setUser(res.data);
            }).catch(err => console.log(err));
        }else{
            history.push('/');
        }
    },[history, token])

    useEffect(() => {
        getUser(token!);
    },[])

    return(
        <div className="main-container">
            <h1>Edit Page</h1>
            <pre>
                {JSON.stringify(user,null,2)}
            </pre>
        </div>
    )
}

export default EditProfile;
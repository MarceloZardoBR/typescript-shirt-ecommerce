/* eslint-disable no-unused-vars */
import axios from 'axios';
import { IUser } from '../commons/types';

export const createUser = async (user: IUser): Promise<boolean> => {
    let response: boolean = false;

    await axios.post('http://localhost:3333/user/create', {
        name: user.name,
        email: user.email,
        password: user.password
    }).catch(err => console.log(err))
        .then(res => {
            if(res){
             response = true;   
            }
        })
        
    return response;
}
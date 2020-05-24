/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { RouteComponentProps } from "react-router-dom";
import { Formik, Form, FormikProps} from 'formik';
import { createUser } from '../services/CreateUser';

import './Register.css';

interface Values {
    name: string,
    email: string,
    password: string
}

interface Props {
    onHandleCancel: () => void;
    onHandleSubmit: (values: Values) => void;
}

const Register: React.FC<RouteComponentProps & Props> = (props, { onHandleCancel, onHandleSubmit }) => {

    onHandleCancel = () => {
        props.history.push('/');

    }

    onHandleSubmit = (values:Values) =>{
        if(createUser(values)){
            const message:string = 'Conta Criada com Sucesso';
            props.history.push('/user/login', message)
        }
        
    }

    return (
        <div className="register-container">
            <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={values => {
                onHandleSubmit(values);
            }}>
                {({ values, handleChange, handleBlur, isSubmitting }) => (
                    <Form>
                        <input name="name"
                            placeholder='Nome Completo'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <input name="email"
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <input name="password"
                            type="password"
                            placeholder='Senha'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur} />

                        <div className="buttons-container">
                            <button type='submit' disabled={isSubmitting}>Criar Conta</button>
                            <button onClick={onHandleCancel}>Cancelar</button>
                        </div>
                        {/* <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre> */}
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default Register;
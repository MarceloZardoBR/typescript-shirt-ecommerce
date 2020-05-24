import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { RouteComponentProps ,withRouter } from 'react-router';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Main from './Pages/Main/Main';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';
import CartCheckout from './Pages/Cart/CartCheckout';
import ViewProduct from './Pages/Products/ViewProduct';
import SearchedProducts from './Pages/Products/SearchedProducts';

interface OwnProps {
    userid: string;
}

class Routes extends React.Component<RouteComponentProps> {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Main} />
                <Route path='/user/login' component={Login} />
                <Route path='/user/create' component={Register} />
                <Route path='/user/profile/' component={Profile} />
                <Route path='/user/edit/' component={EditProfile} />
                <Route path='/user/cart/' component={CartCheckout} />
                <Route path='/product/view/:id' component={ViewProduct} />
                <Route path='/products/searched/' component={SearchedProducts} />
            </BrowserRouter>
        )
    }
}

export default withRouter(Routes);
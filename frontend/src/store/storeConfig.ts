/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, Store } from 'redux';
import { SearchedProductsState } from './searchProducts/types';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './rootReducers';

const sagaMiddlewares = createSagaMiddleware();

export interface State {
    products: SearchedProductsState
}

const store: Store<State> = createStore(rootReducers, applyMiddleware(sagaMiddlewares));


export default store;
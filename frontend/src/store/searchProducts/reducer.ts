/* eslint-disable no-unused-vars */
import { Reducer } from 'redux';
import { 
    SearchedProductsTypes,
    SearchedProductsState
} from './types';

const initialState: SearchedProductsState = {
    products: [],
    error: false,
    loading: false,
}

const reducer: Reducer<SearchedProductsState> = (state = initialState, action) =>{
    switch(action.type){
        case SearchedProductsTypes.GET_SEARCHED_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
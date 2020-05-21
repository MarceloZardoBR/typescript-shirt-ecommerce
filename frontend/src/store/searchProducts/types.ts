/* eslint-disable no-unused-vars */
export enum SearchedProductsTypes {
    GET_SEARCHED_PRODUCTS = 'GET_SEARCHED_PRODUCTS',
}

export interface Products {
    _id: string
    name: string
    photo: string
    price: string
    size: string
}

export interface SearchedProductsState {
    readonly products: Products[],
    readonly loading: boolean,
    readonly error: boolean
}
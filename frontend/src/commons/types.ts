export interface IUser{
    _id?: string,
    name: string,
    email: string,
    password: string,
    createdAt?: string,
    cart?: string,
}

export interface IProduct {
    _id: string,
    name: string,
    price: string,
    photo: string,
    size: string,
}
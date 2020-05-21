import { Schema, model, Document, SchemaType } from 'mongoose';
import { IProduct } from './Products';

export interface ICart extends Document {
    itens: Array<IProduct['_id']>,
    status: string
}

export interface IUser extends Document {
    name: string,
    email: string,
    password: string
}

const CartSchema = new Schema({
    itens: [{type: Schema.Types.ObjectId, required: true}],
    status: String
})

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    cart: {
        type: CartSchema,
        default:{
            itens: [],
            status: 'Ativo'
        }
    }
})

export default model<IUser>('User', UserSchema);
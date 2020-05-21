import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string,
    photo: string,
    price: string,
    size: string,
}

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    }
});

ProductSchema.index({name: 'text'})

export default model<IProduct>('Product', ProductSchema);
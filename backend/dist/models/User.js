"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CartSchema = new mongoose_1.Schema({
    itens: [{ type: mongoose_1.Schema.Types.ObjectId, required: true }],
    status: String
});
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    cart: [{
            type: CartSchema,
            default: {
                itens: [],
                status: 'Ativo'
            }
        }]
});
exports.default = mongoose_1.model('User', UserSchema);

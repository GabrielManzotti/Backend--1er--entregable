import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const cartSchema = new Schema({

    products: {
        type: [{ productId: String, quantity: Number }],
        require: true,
        ref: 'Products'
    },
})

cartSchema.plugin(mongoosePaginate)
export const cartsModel = model("Cart", cartSchema);
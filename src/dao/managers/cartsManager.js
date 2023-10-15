import { cartsModel } from "../../db/models/cart.models.js";

class CartManager {
    async findAll() {
        return cartsModel.find().lean()
    }
    async findById(id) {
        return cartsModel.findById(id)
    }
    async createOne(obj) {
        return cartsModel.create(obj)
    }

    async updateOne(cartId, productId) {
        const foundCart = await cartsModel.findById(cartId)
        const foundProduct = foundCart.products.find(
            (product) => product.productId === productId
        );
        if (foundProduct) {
            foundProduct.quantity++;
        } else {
            foundCart.products = [

                ...foundCart.products,
                ...[{ productId: productId, quantity: 1 }],
            ];
        }
        await foundCart.save();
        return foundCart
    } catch(error) {
        error;
    }

    async deleteOne(id) {
        return cartsModel.deleteOne({ _id: id });
    }
}
export const cartsManager = new CartManager();
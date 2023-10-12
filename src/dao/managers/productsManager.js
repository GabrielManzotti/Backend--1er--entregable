import { productsModel } from "../../db/models/products.models.js";

class ProductManager {
    async findAll() {
        return productsModel.find()
    }
    async findById(id) {
        return productsModel.findById(id)
    }
    async createOne(obj) {
        return productsModel.create(obj)
    }
    async updateOne(id, obj) {
        return productsModel.updateOne({ _id: id }, obj);
    }
    async deleteOne(id) {
        return productsModel.deleteOne({ _id: id });
    }
}
export const productsManager = new ProductManager();
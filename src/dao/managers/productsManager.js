import { productsModel } from "../../db/models/products.models.js";

class ProductManager {
    async findAll(opt) {
        const result = await productsModel.paginate({}, opt)
        const info = {
            count: result.totalDocs,
            pages: result.totalPages,
            prev: result.hasPrevPage ? `http://localhost:8080/api/products?page=${result.prevPage}` : null,
            next: result.hasNextPage ? `http://localhost:8080/api/products?page=${result.nextPage}` : null
        }
        return { info, results: result.docs }
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
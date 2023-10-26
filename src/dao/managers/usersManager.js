import { usersModel } from "../../db/models/users.models.js"
class UsersManager {
    async findById(id) {
        const result = await usersModel.findById(id)
        return result
    }

    async findByEmail(email) {
        const result = await usersModel.findOne({ email })
        return result
    }

    async createOne(obj) {
        const result = await usersModel.create(obj)
        return result
    }
}

export const usersManager = new UsersManager()
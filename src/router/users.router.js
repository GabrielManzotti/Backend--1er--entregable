import { Router } from "express";
import { usersManager } from "../dao/managers/usersManager.js";
import { compareData, hashData } from "../utils.js"

const router = Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const userDB = await usersManager.findByEmail(email)
    //comapra email
    if (!userDB) {
        return res.json({ error: "Email or password don't match" })
    }
    const comparePassword = await compareData(password, userDB.password)
    //compara password
    if (!comparePassword) {
        return res.json({ error: "Email or password don't match" })
    }
    req.session["email"] = email
    req.session["first_name"] = userDB.first_name
    req.session["isAdmin"] =
        email === "adminCoder@coder.com" && password === "adminCod3r123" ? true : false
    res.redirect("/api")
})

router.post("/signup", async (req, res) => {
    const { password } = req.body
    const hashedPassword = await hashData(password)
    const createdUser = await usersManager.createOne({ ...req.body, password: hashedPassword })
    res.status(200).json({ message: "User created", createdUser })
})

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/api/login")
    })
})



export default router
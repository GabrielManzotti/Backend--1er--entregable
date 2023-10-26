import { Router } from "express";
import { productsManager } from "../dao/managers/productsManager.js";

const router = Router()

router.get("/", async (req, res) => {
    const results = await productsManager.find({})
    const { first_name, email, isAdmin } = req.session
    res.render('products', { results, first_name, email, isAdmin })
})

router.get('/productsList', (req, res) => {
    res.render('productsList')
})

router.get('/websocket', (req, res) => {
    res.render('websocket')
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', { style: 'realTimeProducts.css' })
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/home", (req, res) => {
    console.log("req", req)
    const { first_name, email, isAdmin } = req.session
    res.render("home", { first_name, })
})


export default router
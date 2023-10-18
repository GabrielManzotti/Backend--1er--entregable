import { Router } from "express";
import { productsManager } from "../dao/managers/productsManager.js";

const router = Router()

router.get("/", async (req, res) => {
    const result = await productsManager.find({})
    res.render('products', { result })
})

router.get('/productsList', (req, res) => {
    res.render('productsList')
})

router.get('/websocket', (req, res) => {
    res.render('websocket')
})

router.get('/home', (req, res) => {
    res.render('home')
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', { style: 'realTimeProducts.css' })
})



export default router
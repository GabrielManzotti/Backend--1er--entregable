import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.render('createProducts')
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
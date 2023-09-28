import { Router } from "express";

const router = Router()

router.get('/vista1', (req, res) => {
    res.render('vista1')
})

router.get('/vista2', (req, res) => {
    res.render('vista2')
})

router.get("/", (req, res) => {
    res.render('createProducts')
})

router.get('/websocket', (req, res) => {
    res.render('websocket')
})

router.get('/home', (req, res) => {
    res.render('home')
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts')
})



export default router
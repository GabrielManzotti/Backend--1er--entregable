import { Router } from 'express'
import { cartManager } from '../dao/entities/cart.js'
import { cartsManager } from '../dao/managers/cartsManager.js'
const router = Router()

router.post('/', async (req, res) => {
    const cart = await cartsManager.createOne()
    try {
        res.status(200).json({ message: "cart created", cart: cart })
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
})

router.get('/', async (req, res) => {
    const carts = await cartsManager.findAll()
    try {
        res.status(200).json({ message: "carts", carts: carts })
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
})

router.get('/:cid', async (req, res) => {
    const { idCart } = req.params
    try {
        const cart = await cartsManager.findById(idCart)
        return res.status(200).json({ message: "Cart", Cart: cart })
    } catch (error) {
        return res.status(500).json({ message: "error" })
    }
})


router.post('/:cid/product/:pid', async (req, res) => {
    let cartId = req.params.cid
    let productId = req.params.pid
    try {
        const result = await cartsManager.updateOne(cartId, productId)
        return res.status(200).json({ message: "Product added", Cart: result })
    } catch (error) {
        return res.status(500).json({ message: "error" })
    }
})

router.delete('/delete/:cartId', async (req, res) => {
    const { cartId } = req.params
    try {
        const deletedCart = await cartsManager.deleteOne(cartId)
        return res.status(200).json({ message: "Cart deleted", Cart: deletedCart })
    } catch (error) {
        res.status(500).json({ message: "error!" })
    }
})


//---------router con fileSystem---------------

// router.get('/', async (req, res) => {
//     const cart = await cartManager.getCarts()
//     try {
//         if (cart === "no info") {
//             res.status(400).json({ message: "no info" })
//         } else {
//             res.status(200).json({ message: "carts", cart })
//         }
//     } catch (error) {
//         error
//     }
// })

// router.post('/', async (req, res) => {
//     const cart = await cartManager.createCart()
//     try {
//         res.status(200).json({ message: "cart created", cart })
//     } catch (error) {
//         error
//     }
// })

// router.get('/:cid', async (req, res) => {
//     const { cid } = req.params
//     try {
//         const cart = await cartManager.getCartByID(+cid)
//         if (cart === "no cart") {
//             res.status(400).json({ message: "cart no found" })
//         }
//         else {
//             res.status(200).json({ message: "cart founded", cart })
//         }
//     } catch (error) {
//         error
//     }
// })

// router.post('/:cid/product/:pid', async (req, res) => {

//     let cartId = req.params.cid
//     let productId = req.params.pid
//     try {
//         const cart = await cartManager.addToCart(+cartId, +productId)
//         res.status(200).json(cart)
//     } catch (error) {
//         error
//     }
// })

export default router
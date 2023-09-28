import { productManager } from "../entities/script2doEntregable.js";

async function getAllProductsHandler(io, socket) {

    socket.on("getAllProducts", async () => {
        const products = await productManager.getProducts();
        io.sockets.emit("updatedProducts", products);
    });

}

export { getAllProductsHandler };
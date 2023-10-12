const productsList = document.getElementById("productsList")
let products = []

async function getAllProducts() {
    console.log("getall");
    try {
        const response = await fetch("http://localhost:8080/api/products");
        console.log("pasa fetch");
        const responseJson = await response.json();
        console.log("pasa response", responseJson);
        products = [...responseJson.Products];
        console.log("products", products)
        const prodMap = products
            .map((objMessage) => `<p>${objMessage.title}: $${objMessage.price}</p>`)
            .join(" ");
        productsList.innerHTML = prodMap;
    } catch (error) {
        error
    }
}
getAllProducts()
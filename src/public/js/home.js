let products = []
const divProducts = document.getElementById("divProducts")

async function getAllProducts() {
    try {
        const response = await fetch("http://localhost:8080/api/products");
        const responseJson = await response.json();
        products = [...responseJson.products];
        console.log("products", products)
        const prodMap = products
            .map((objMessage) => `<p>${objMessage.title}: ${objMessage.price}</p>`)
            .join(" ");
        divProducts.innerHTML = prodMap;
    } catch (error) {
        error
    }
}
getAllProducts()

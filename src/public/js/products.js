window.addEventListener('click', function (e) {
    function detectButton(event) {
        let id = e.target.id
        let dom = e.target.nodeName
        if (dom === "INPUT") {
            addNewProductToCart(id)
        }
    }
    detectButton()
})

async function addNewProductToCart(product) {
    try {
        const result = await fetch(`http://localhost:8080/api/cart/652f3e21d09bf31d980b1049/product/${product}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        window.location.replace("http://localhost:8080/api/cart")
    } catch (error) {
        error
    }
}


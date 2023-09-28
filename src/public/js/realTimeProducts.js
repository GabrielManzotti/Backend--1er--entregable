const socketClient = io()
let products = [];

const productsList = document.getElementById("productsList")
const addProductForm = document.getElementById("addProductForm")
const deleteForm = document.getElementById("deleteForm")

socketClient.emit("getAllProducts");

const validaProd = (obj) => {
    if ((!obj.title) || (!obj.description) || (!obj.price) || (!obj.code) || (!obj.stock) || (!obj.category)) {
        return false
    } else {
        return true
    }
}

addProductForm.onsubmit = (e) => {
    e.preventDefault()
    let newProduct = {
        title: document.getElementById("newProductTitle").value,
        description: document.getElementById("newProductDescription").value,
        price: document.getElementById("newProductPrice").value,
        code: document.getElementById("newProductCode").value,
        stock: document.getElementById("newProductStock").value,
        category: document.getElementById("newProductCategory").value,
        status: true,
    };
    if (validaProd(newProduct)) {
        addNewProduct(newProduct)
        console.log("ejecuta addnewprod");
        socketClient.emit("getAllProducts");
    } else {
        console.log("faltan datos   ")
    }


}

async function addNewProduct(product) {
    try {
        const result = await fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

    } catch (error) {

        error
    }
}

deleteForm.onsubmit = (e) => {
    e.preventDefault()
    let deleteProdID = document.getElementById("deleteProductId").value
    if (deleteProdID) {
        deleteProduct(deleteProdID);
        socketClient.emit("getAllProducts");
    }
}

async function deleteProduct(productId) {
    try {
        const result = await fetch(`http://localhost:8080/api/products/delete/${productId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

        });
    } catch (error) {
        error
    }
}

function compileProducts() {
    const productsTemplate = products
        .map(
            (product) => `<li>
        <p>ID: ${product.id}</p> 
        <p>Title: ${product.title}</p> 
        <p>Description: ${product.description}</p> 
        <p>Price: ${product.price}</p> 
        <p>Code: ${product.code}</p> 
        <p>Stock: ${product.stock}</p>
      </li>`
        )
        .join(" ");
    productsList.innerHTML = productsTemplate;
}

socketClient.on("updatedProducts", (_products) => {
    products = _products;
    console.log("product deentro de socketclient", products);
    compileProducts()
});
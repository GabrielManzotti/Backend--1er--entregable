
const createProduct = document.getElementById("createProduct")
const updateProduct = document.getElementById("updateProduct")
const errorCreate = document.getElementById("errorCreate")
const errorUpdate = document.getElementById("errorUpdate")
const updateId = document.getElementById("updateId")

const validaProd = (obj) => {
    if ((!obj.title) || (!obj.description) || (!obj.price) || (!obj.code) || (!obj.stock) || (!obj.category)) {
        return false
    } else {
        return true
    }
}

createProduct.onsubmit = (e) => {
    e.preventDefault()
    let newProduct = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        code: document.getElementById("code").value,
        stock: document.getElementById("stock").value,
        category: document.getElementById("category").value,
        thumbnail: document.getElementById("thumbnail").value,
        status: true,
    };
    if (validaProd(newProduct)) {
        addNewProduct(newProduct)
        window.location.replace("http://localhost:8080/api/productsList")
    } else {
        errorCreate.innerHTML = `<p>Some data is missing</p>`
    }
}

async function addNewProduct(product) {
    try {
        const result = await fetch("http://localhost:8080/api/products/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        errorCreate.innerHTML = `<p></p>`
    } catch (error) {
        error
    }
}

const validaUpdate = (obj) => {
    if ((!obj.price) || (!obj.status) || (!obj.stock)) {
        return false
    } else {
        return true
    }
}

updateProduct.onsubmit = (e) => {
    e.preventDefault()
    let id = updateId.value
    let updateProd = {
        price: document.getElementById("updatePrice").value,
        status: document.getElementById("updateStatus").value,
        stock: document.getElementById("updateStock").value,
    };
    if (validaUpdate(updateProd)) {
        updateAProduct(id, updateProd)
        window.location.replace("http://localhost:8080/api/productsList")
    } else {
        errorUpdate.innerHTML = `<p>Some data is missing</p>`
    }
}

async function updateAProduct(id, updateProd) {
    try {
        const result = await fetch(`http://localhost:8080/api/products/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProd),
        });
        errorUpdate.innerHTML = `<p></p>`
    } catch (error) {
        error
    }
}

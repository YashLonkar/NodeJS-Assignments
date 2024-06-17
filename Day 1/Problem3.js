const products = [
    {
        name: "iPhone",
        price: "58999/-",
        inStock: "True"
    },
    {
        name: "iPad",
        price: "29999/-",
        inStock: "True"
    },
    {
        name: "iPod",
        price: "18999/-",
        inStock: "True"
    },
]

const productNames= products.map(product=> product.price);

productNames.forEach(name=> console.log(name));
// Q3.Write a function sortProducts that sorts an array of product objects either by 
// name (alphabetically) or price (ascending or descending).

function sortProducts(products, sortBy, order) {

    return products.sort((a, b) => {

        if (sortBy === "name") {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return order === 'asc' ? -1 : 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return order === 'asc' ? 1 : -1;
            return 0
        } else if (sortBy === "price") {
            return order === "asc" ? a.price - b.price : b.price - a.price;
        }
    })

}

const products = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 800 },
    { name: "Hat", price: 300 },
    { name: "Jeans", price: 1000 }
];

const sortBy = "name"
const order = "asc"

const sortedProducts = sortProducts(products, sortBy, order)
console.log(sortedProducts);

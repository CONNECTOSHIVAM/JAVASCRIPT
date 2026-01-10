// Q3.Write a function sortProducts that sorts an array of product objects either by 
// name (alphabetically) or price (ascending or descending).

function sortProducts(products,sortedBy,order){

    return products.sort((a,b)=>{
        if(sortedBy === "name")
        {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return order === "asc" ? -1 : 1;
            if(a.name.toLowerCase() < b.name.toLowerCase()) return order === "asc" ? 1 : -1;
            return 0;
        }else if(sortedBy === "price"){
            return order === "asc" ? a.price - b.price : b.price - a.price;
        }
    });

}

const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 1000 }
];
const sortedBy = "price"
const order = "asc"

const sortedProducts = sortProducts(products,sortedBy,order)
console.log(sortedProducts);

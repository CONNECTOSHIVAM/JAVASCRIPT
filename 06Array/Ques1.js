// Q1.Write a function getSuggestions that takes an array of product names and a 
// search query, then returns all product names starting with the search query.


function getSuggestions(products,searchQuery){

    return products.filter((item)=>item.toLowerCase().startsWith(searchQuery.toLowerCase()))
}

const products = ["Shirt", "Shoes", "Hat", "Jeans"];
const searchQuery = "sh"

const filteredItemList = getSuggestions(products,searchQuery)
console.log(filteredItemList)
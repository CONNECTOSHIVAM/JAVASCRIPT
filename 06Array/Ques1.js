// Q1.Write a function getSuggestions that takes an array of product names and a 
// search query, then returns all product names starting with the search query.

function getSuggestions(product,query){
    return product.filter((item)=>item.toLowerCase().startsWith(query.toLowerCase()))
}


const product = ["Shirt", "Shoes", "Hat", "Jeans"]
const query = "sh"

const suggestedItemList = getSuggestions(product,query)
console.log(suggestedItemList)
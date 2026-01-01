// Q9.Write a program in js where you have given a array products .Which contain the
//  all products in case-insenstive form and another is searchQuery.Write a logic 
// to check is searQuery present in the production array..

// function isValidSearch(arr,search){
//     newArr = []
//     for(let item of arr){
//         newArr.push(item.toLowerCase())
//     }
//     const isAvailable =newArr.includes(search)
//     console.log(isAvailable?"Item is persent in Production array":"Item is not persent in Production array.")
// }

// const production = ["Apple", "banana", "Orange", "grape", "APPLE"];
// const searchQuery = "apple"

// let searchResult = isValidSearch(production,searchQuery)

// Approach 2:

function isValidSearch(items,query){
    return items.filter((item)=> item.toLowerCase() === query.toLowerCase())
}

const products = ["Apple", "banana", "Orange", "grape", "APPLE"];
const searchQuery = "apple"

const searchItem = isValidSearch(products,searchQuery);
console.log(searchItem);
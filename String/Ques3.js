// Q3. Write a program in javascript where create a variable query by assigning some 
// word to the variable and there is another string productDescription and search 
// the query in the productDescription.


// APPROACH 1: 

// function productDescriptionMatch(item,desc){
//     const reg = new RegExp(`\\b${item}\\b`,'gi')
//     const matches = desc.match(reg)
//     return matches ? `Product description match to search query` : `Product description not match to search query`
// }

// query = "mango"
// productDescription = "mango is classic ."

// console.log(productDescriptionMatch(query,productDescription));

// APPROACH 2:

function isProductMatch(query,description){
   if(description.toLowerCase().includes(query.toLowerCase())){
      console.log(`Product matches the search query!`)
   }else{
      console.log(`Product description is not match to seach query.`)
   }
}

const query =  "red shs";
const productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query,productDescription)
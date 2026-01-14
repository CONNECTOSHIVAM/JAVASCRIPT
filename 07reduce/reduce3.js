// Q4.  Frequency Map (counting)

// function getFruitsCount(fruits){

//     return fruits.reduce((acc,fruit)=>{
//         acc[fruit] = (acc[fruit] || 0) + 1
//         return acc 
//     },{})
// }


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitsWithCount = getFruitsCount(fruits)
console.log(fruitsWithCount);


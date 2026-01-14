// Q4.  Frequency Map (counting)

function getFruitsCount(arr)
{
    return arr.reduce((acc,fruit)=>{
        acc[fruit] = (acc[fruit] || 0)+1
        return acc
    },{})
}


const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitsWithCount = getFruitsCount(arr)
console.log(fruitsWithCount);


// Q6. Write a program to combine two Sets into one, containing all unique elements 
// from both Sets.

function combineTheSet(mySet1,mySet2){
    return new Set([...mySet1, ...mySet2])
}


const mySet1 = new Set([1,2,3,4,5,6])
const mySet2 = new Set([8,9,10,2,3,4])

console.log(combineTheSet(mySet1,mySet2))
// Q4. Write a program to find the total number of elements in a Set using the size 
// property.

function getTheSizeOfSet(itemSet) {

    return itemSet.size
}


const mySet = new Set([7,12, 56, 89, 74, 66])
console.log(getTheSizeOfSet(mySet))

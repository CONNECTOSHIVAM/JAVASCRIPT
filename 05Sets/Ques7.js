// Q7. Write a program to identify elements that are common to both Sets using 
// the filter() and has() methods.

function intersectionOfSets(set1,set2){
    return new Set([...set1].filter((item)=> set2.has(item)))
}

const mySet1 = new Set([1,2,3,4,5,6])
const mySet2 = new Set([8,9,10,2,3,4])

console.log(intersectionOfSets(mySet1,mySet2));


// Q8. Write a program to find elements that are in one Set but not in the other.

function differenceOfSets(mySet1,mySet2){

    return new Set([...mySet1].filter((elem)=> !mySet2.has(elem)))
}

const mySet1 = new Set([1,2,3,4,5,6])
const mySet2 = new Set([8,9,10,2,3,4])

console.log(differenceOfSets(mySet1,mySet2));

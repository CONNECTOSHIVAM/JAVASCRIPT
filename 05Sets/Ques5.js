// Q5. Write a program to transform a Set into an array for further operations such
//  as sorting or iteration.

function covertSetToArray(itemSet){
 
    return [...itemSet]
    
}



const mySet = new Set([15,56,23,74,89])

const arrayS = covertSetToArray(mySet)
console.log(arrayS);
console.log("Sort the array : ",arrayS.sort((a,b)=>a-b));
console.log("Iterating: ");
arrayS.forEach((elem)=>console.log(elem))

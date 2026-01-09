// Q3. Write a program to check whether a Set contains a specific element using the
//  has() method. Return true if it exists, otherwise false.


function checkElementExistInArray(itemSet,item){
   return itemSet.has(item)
}

const mySet = new Set([21,56,98,45,63])
const item = 630
console.log(checkElementExistInArray(mySet,item))


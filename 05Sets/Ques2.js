// Q2. Write a program to remove a specific element from a Set using the delete() 
// method and return the updated Set.

function deleteSpecificElements(itemSet,deleteItem){

  itemSet.delete(deleteItem)
  return itemSet

}

const mySet = new Set([1,2,3,4,5]);
console.log(deleteSpecificElements(mySet,4));

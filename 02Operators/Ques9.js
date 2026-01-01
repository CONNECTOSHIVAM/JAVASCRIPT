// Q9.Write a function calculateDistance that takes the coordinates of two points in 
// a 2D plane and returns the distance between them.

function calculateDistance(a0,b0,a1,b1){
   const a = a1 - a0
   const b = b1 - b0

   return Math.sqrt(a*a+b*b).toFixed(2)
}

console.log(calculateDistance(5,6,4,3));
console.log(calculateDistance(3, 4, 7, 1)); 
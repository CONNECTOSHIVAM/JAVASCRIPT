// Q10. Write a function calculateAverageSpeed that takes the total distance
//  traveled and the total time taken, and returns the average speed.

function calculateAverageSpeed(distance,time){
   return (distance/time).toFixed(2)
}

const totalDistance = 570
const takeTimeInHours = 5

console.log(calculateAverageSpeed(totalDistance,takeTimeInHours));
console.log(calculateAverageSpeed(150, 3));
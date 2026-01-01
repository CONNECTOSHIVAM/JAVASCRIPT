// Q6.Write a function generateRandomNumber that generates a random number between
//  a given minimum and maximum value (inclusive).

function generateRandomNumber(start,end){
    return Math.floor(Math.random()*(end-start+1)+start);
}
console.log(generateRandomNumber(5,10))
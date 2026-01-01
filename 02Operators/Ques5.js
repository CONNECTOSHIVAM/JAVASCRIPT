// Q5. Write a function calculateSimpleInterest that takes the principal amount, 
// the annual interest rate, and the time in years, and returns the simple interest.


function calculateSimpleInterest(amount,rate,year){
   return (amount*rate*year)/100
}


const amount = 12500;
const rate = 5;
const year = 3;

console.log(calculateSimpleInterest(amount,rate,year))
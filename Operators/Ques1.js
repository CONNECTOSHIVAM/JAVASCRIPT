// Q1. Write a function calculateTotalPrice that takes the price of an item and the 
// tax rate, and returns the total price after tax.

function calculateTotalPrice(price,rate){
   return price+(price*rate/100);
}

const itemPrice = 5000;
const tax = 10;

console.log(calculateTotalPrice(itemPrice,tax))
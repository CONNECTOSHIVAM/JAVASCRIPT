// Q3. Write a function calculateTip that takes the total bill amount and the tip
//  percentage, and returns the tip amount.

function calculateTip(bill,tip){
     return bill*(tip/100)
}

const bill = 12500
const tip =  10

console.log(calculateTip(bill,tip));

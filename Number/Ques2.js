// Q2. Write a function that rounds a number to the nearest whole number.

function roundNum(a) {
    const num = Math.round(a)
    return isNaN(a) ? NaN : num;
}

console.log(roundNum(4.5));
console.log(roundNum(4.4));
console.log(roundNum(-1.5));
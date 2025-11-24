//Q1. Write a function to convert a string containing a number (e.g., "123") into
//  an actual number. If it is not a valid number, return NaN.

function strToNum(a) {
    let num = Number(a)

    return isNaN(num) ? NaN : num;
}

console.log(strToNum('123'))
console.log(strToNum('myClass'))
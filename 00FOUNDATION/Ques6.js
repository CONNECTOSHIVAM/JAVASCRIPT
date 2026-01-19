// Q6. Count digits in a number

function getDigitsInNumber(digits){
    digits = Math.abs(digits)
    num = String(digits)
    return num.length
}



const digits = -25236;
console.log(getDigitsInNumber(digits));

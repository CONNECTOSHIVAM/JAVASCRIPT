// Q6. Count digits in a number


// APPROACH 1:

function countDigitsInNum(digits)
{
    digits = Math.abs(digits)
    const str = String(digits)
    return str.length
}
// APPROACH 2:





const digits = -25236;
console.log(countDigitsInNum(digits));

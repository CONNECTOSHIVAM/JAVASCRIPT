// Q6. Count digits in a number


// APPROACH 1:

// function countDigitsInNum(digits)
// {
//     digits = Math.abs(digits)
//     const str = String(digits)
//     return str.length
// }

// APPROACH 2:

function countDigitsInNum(digits){
    digits = Math.abs(digits)
    count = 0;
    while(digits>0)
    {
        digits = Math.floor(digits/10);
        count++;
    }
    return count
}





const digits = -2523986;
console.log(countDigitsInNum(digits));

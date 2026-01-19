// Q6. Count digits in a number


// APPROACH 1:

// function getDigitsInNumber(digits){
//     digits = Math.abs(digits)
//     num = String(digits)
//     return num.length
// }

// APPROACH 2:
function getDigitsInNumber(digits)
{
    digits = Math.abs(digits)
    let count = 0
    while(digits > 0)
        {
            digits = Math.floor(digits/10)
            count += 1;
        } 
    return count
}




const digits = -25236;
console.log(getDigitsInNumber(digits));

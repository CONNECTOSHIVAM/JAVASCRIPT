// Q1.Write a function to convert a string containing a number (e.g., "123")
//  into an actual number. If it is not a valid number, return NaN.

// function strToNumber(num){
//     num1 = parseInt(num)
//     if(typeof(num1) === 'number'){
//         console.log(num1)
//     }
//     else{
//         return NaN
//     }
// }

// strToNumber('fgh');

function convertToNumber(str){
    const number =Number(str);
    return isNaN(number)?NaN:number;
}

// console.log(convertToNumber('12.3'));
console.log(convertToNumber('abc'));

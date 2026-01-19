// Q9. Check if number is positive, negative, or zero

function numState(number){

    if(number === 0)
    {
        console.log(`Number is zero.`);
    }else if(number%2===0)
    {
        console.log(`Number is Even.`);
    }else{
        console.log(`Number is odd.`);
    }
}



const number = 10;
console.log(numState(number));

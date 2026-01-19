// Q7. Reverse a number

function reverseNumber(num){

    n = Math.abs(num)
    let reversed = 0
    while(n > 0)
    {
        let lastDigit = n % 10
        reversed = reversed * 10 + lastDigit
        n = Math.floor(n/10)
    }
    return num < 0? -reversed : reversed;
}

const num = 52352;
console.log(reverseNumber(num));

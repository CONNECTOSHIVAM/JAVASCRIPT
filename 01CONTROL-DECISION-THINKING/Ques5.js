// Q5. Find factorial of N

function getFactorial(num)
{
    let fact = 1;
    let i = 2
    while(i<=num)
    {
        fact *= i
        i++;
    }
    return fact
}


const num = 5;
console.log(getFactorial(num));

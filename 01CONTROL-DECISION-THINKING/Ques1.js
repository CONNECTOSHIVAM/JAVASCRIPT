// Q1.Check if a number is prime

function checkPrime(num)
{
    if(num<=1)
    {
        return "Number is not a Prime Number.";
    }
    let isPrime = true
    for(let i = 2;i<=Math.sqrt(num);i++)
    {
        if(num%i==0)
        {
            isPrime = false
            break;
        }
    }
    return isPrime
}


const num = 12
console.log(checkPrime(num));

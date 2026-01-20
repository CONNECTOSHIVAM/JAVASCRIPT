// Q2.Print all prime numbers till N


function listOfPrime(n)
{
    const arr = []

    for(let i=2;i<=n;i++)
    {
        let isPrime = true;
        for(let j = 2; j<=Math.sqrt(n);j++)
        {
            if(i%j==0)
            {
                isPrime=false
                break
            }
        }
        if(isPrime) arr.push(i)
    }

    return arr 
}

const n = 17;
console.log(listOfPrime(n));

// Q1.Check if a number is prime

// function checkPrime(num)
// {
//     if(num<=1)
//     {
//         return "Number is not a Prime Number.";
//     }
//     let isPrime = true
//     for(let i = 2;i<=Math.sqrt(num);i++)
//     {
//         if(num%i==0)
//         {
//             isPrime = false
//             break;
//         }
//     }
//     return isPrime
// }

// using while loops.
function checkPrime(num){

    if(num<=1)
    {
        console.log(`${num} is not Prime number.`);
    }
    let isPrime = true;
    let i = 2
    while(i<=Math.sqrt(num))
    {
          if(num%i==0)
          {
            isPrime = false;
          }
          i++;
    }
    return isPrime
}

const num = 13
console.log(checkPrime(num));

// Q1. Read N numbers and print their sum

function sumOfN(n)
{
    let sum = 0
    for(let i=1;i<=n;i++)
    {
       sum += i
    }
    return sum
}


const n = 10;
console.log(sumOfN(n));

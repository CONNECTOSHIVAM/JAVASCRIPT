// Q1. Read N numbers and print their sum

function sumOfN(n)
{
    let sum = 0
    let i = 1
    while(i<=n)
    {
        sum += i
        i++;
    }
    return sum
}


const n = 10;
console.log(sumOfN(n));

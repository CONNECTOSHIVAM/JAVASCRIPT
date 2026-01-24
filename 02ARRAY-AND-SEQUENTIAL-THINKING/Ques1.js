// Q1. Find sum of array

function sumArr(arr)
{
    let sum = 0;
    for(let i = 0;i<arr.length;i++)
    {
        sum += arr[i]
    }
    return sum
}


const arr = [12,53,75,96,45]
console.log(sumArr(arr));

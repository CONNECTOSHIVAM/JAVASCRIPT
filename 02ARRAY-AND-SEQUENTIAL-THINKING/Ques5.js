// Q5. Reverse an array

function reverseTheArr(arr)
{
    let newArr= []
    for(let i = arr.length-1;i>=0;i--)
    {
        newArr.push(arr[i])
    }
    return newArr 
}

const arr = [12,53,75,96,45]
console.log(reverseTheArr(arr));

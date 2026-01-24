// Q3. Find minimum in array.

function findTheMin(arr)
{
    let min = Infinity
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min = arr[i]
        }
    }
    return min
}

const arr = [12,53,75,96,45]
console.log(findTheMin(arr));

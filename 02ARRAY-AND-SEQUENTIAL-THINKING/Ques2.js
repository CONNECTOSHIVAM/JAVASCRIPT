// Q2. Find maximum in array

function findTheMax(arr)
{
    let max = -Infinity
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i]
        }
    }
    return max
}




const arr = [12,53,75,96,45]
console.log(findTheMax(arr));

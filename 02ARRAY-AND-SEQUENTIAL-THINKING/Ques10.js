// Q.Check if array is sorted.

function isArraySorted(arr)
{
    let isSorted = true;
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]>arr[i+1])
        {
            isSorted = false;
            break;
        }
    }
    return isSorted
}


const arr = [16,7,8,9,10];
console.log(isArraySorted(arr));

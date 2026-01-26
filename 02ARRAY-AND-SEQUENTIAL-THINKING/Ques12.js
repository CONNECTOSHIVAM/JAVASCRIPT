// Q. Remove duplicates from array.

function removeTheDuplicate(arr)
{
    return [... new Set(arr)];
}


const arr = [1,2,5,1,2,8,9]
console.log(removeTheDuplicate(arr));

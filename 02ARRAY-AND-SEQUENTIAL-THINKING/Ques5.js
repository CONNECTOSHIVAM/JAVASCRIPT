// Q5. Reverse an array

// APPROACH 1:
// function reverseTheArr(arr)
// {
//     let newArr= []
//     for(let i = arr.length-1;i>=0;i--)
//     {
//         newArr.push(arr[i])
//     }
//     return newArr 
// }

// Appraoch 2:
function reverseTheArr(arr)
{
    let start = 0;
    let end = arr.length-1
    let temp;
    while(start<end)
    {
       temp = arr[start]
       arr[start] = arr[end]
       arr[end] = temp
       start++;
       end--;
    }
    
    return arr 
}

// Approach 3:
function reverseTheArr(arr)
{
    let end = arr.length-1
    for(let i=0; i<arr.length;i++)
    {
        if(i<arr.length)
        {
            arr[i]=arr[end]
            arr[end]=arr[i]
            end--;
        }
    }
    return arr 
}
const arr = [12,53,75,96,45]
console.log(reverseTheArr(arr));

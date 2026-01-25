// Q6. Rotate left array by 1


function rotateArrByK(arr,k)
{
    let temp = arr[0];
    for(let i=k;i<arr.length;i++)
    {
        arr[i-1]=arr[i]
    }
    arr[arr.length - 1] = temp;

    return arr

}

const arr = [1,2,3,4,5]
const k = 1
console.log(rotateArrByK(arr,k));


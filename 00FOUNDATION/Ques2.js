// Q2. Read N numbers and print their maximum

function getMaximum(arr){
    let max = -Infinity

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i]
        }
    }
    return max
}


const arr = [1,2,3,8,9,2,75,63,12]
console.log(getMaximum(arr));


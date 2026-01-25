// Q. Find second largest element.

function find2ndLargest(arr){

    let max = -Infinity;
    let max0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max0 = max;
            max = arr[i];
        }
    }
    return max0
}

const arr = [6,3,4,8,2]
console.log(find2ndLargest(arr));

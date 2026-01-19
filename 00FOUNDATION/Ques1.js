// Q1. Read N numbers and print their sum

function additionOfArr(arr){
    let sums = 0
    for(let i= 0;i<arr.length;i++)
    {
        sums += arr[i]
    }
    return sums

}


const arr = [1,2,3,8,9]
console.log(additionOfArr(arr));

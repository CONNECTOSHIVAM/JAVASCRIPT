//Q. sum of the provided arrays.

function sumOfArr(arr){

    return arr.reduce((acc,item)=>acc+item,0)
}



const arr = [1,2,3,4,5]

console.log(sumOfArr(arr));


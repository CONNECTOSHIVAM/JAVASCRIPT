//Q. sum of the provided arrays.


function sumOfArr(arr){
    return arr.reduce((acc,curr)=>{
        return acc + curr
    },0)
}

const arr = [2,3,5,7]

const sum = sumOfArr(arr)
console.log(sum);

// Q5. Partitioning (2 buckets).

function partitionEvenOdd(nums){

    return nums.reduce((acc,item)=>{
        
        if(item%2===0){
            acc.even.push(item)
        }else{
            acc.odd.push(item)
        }

        return acc
    },{even: [],odd: []})
}



const nums = [1,2,3,4,5,6,7,8]
console.log(partitionEvenOdd(nums));

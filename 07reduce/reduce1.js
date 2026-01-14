// Q2. find the maximum value using reduce methoods.

function getMaximum(nums){
    return nums.reduce((acc,item)=> acc > item ? acc : item)
}


const nums = [-10, 5, 9, 2, 100, 55]

const max = getMaximum(nums)
console.log(max);

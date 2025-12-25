// Q4.Write a function calculateBulkDiscount that calculates the total cost for bulk 
// orders, applying a discount when the quantity exceeds a threshold.

function calculateBulkDiscount(price ,quentity,discountThreshold,discountrate){
    
    if(quentity>discountThreshold){
        const discountPrice = price*(1 - discountrate/100)
        return quentity*discountPrice
    }else{
        return quentity*price
    }
}

console.log(calculateBulkDiscount(50, 15, 10, 10)); 
console.log(calculateBulkDiscount(50, 5, 10, 10));  
console.log(calculateBulkDiscount(100, 20, 15, 20));

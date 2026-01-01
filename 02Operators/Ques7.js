// Q7. Write a function calculateDiscountedPrice that takes the original price and 
// the discount percentage, and returns the price after the discount is applied.

function calculateDiscountedPrice(originalPrice,discountPrice){
   return originalPrice-(originalPrice*discountPrice/100);
}

console.log(calculateDiscountedPrice(1575,12))
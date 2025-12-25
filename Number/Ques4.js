// Q.4  Write a function calculateBulkDiscount that calculates the total cost for bulk
//  orders, applying a discount when the quantity exceeds a threshold.

function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {

    if (quantity > discountThreshold) {
        discountPrice = price * (1 - discountRate / 100);

        return quantity * discountPrice;
    }
    else {
        return price * quantity;
    }

}


console.log(calculateBulkDiscount(500, 12, 8, 11));
console.log(calculateBulkDiscount(50, 15, 10, 10));
console.log(calculateBulkDiscount(50, 5, 10, 10));
console.log(calculateBulkDiscount(100, 20, 15, 20));

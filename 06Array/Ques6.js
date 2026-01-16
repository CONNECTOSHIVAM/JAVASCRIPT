// Q6. Write a function getCommonItems that takes two arrays of wishlist items and
//  returns the common items.


function getCommonItems(wishlist1,wishlist2){
    return wishlist1.filter((item)=> wishlist2.includes(item));
}


const wishlist1 = ["Shirt", "Shoes", "Hat"];
const wishlist2 = ["Shoes", "Hat", "Watch"];

console.log(getCommonItems(wishlist1,wishlist2));

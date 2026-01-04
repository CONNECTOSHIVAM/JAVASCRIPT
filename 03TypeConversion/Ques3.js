// Q3. Write a program in javaScript where declare a object apiResponse which return
//  a variable productId of integer type, productName string type, price string type,
//  available boolean type.Write a program to convert the price from string to number.
// Formate price as a currency.

function formatPriceCurrency(apiResponse) {

    const priceInNumber = parseFloat(apiResponse.price)

    const finalPrice = `$${priceInNumber.toFixed(2)}`;
    return finalPrice
}

const apiResponse = {
    productId: 1234,
    productName: "bed",
    price: "4323.50",
    available: true
}

console.log(formatPriceCurrency(apiResponse))

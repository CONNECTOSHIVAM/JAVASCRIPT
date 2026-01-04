// Q3. Write a program in javaScript where declare a object apiResponse which return
//  a variable productId of integer type, productName string type, price string type,
//  available boolean type.Write a program to convert the price from string to number.
// Formate price as a currency.

function formatPriceFromApiResponse(apiResponse) {
    //convert the price string to Number .
    const priceAsNumber = parseFloat(apiResponse.price);
    //Format price to the currency string.
    const formattedPrice = `$${priceAsNumber.toFixed(2)}`;

    return formattedPrice

}

const apiResponse = {
    productName: "Car",
    model: "BMW-M5",
    productId: 1235,
    price: "1654641.46",
    country: "India",
    available: true
}

console.log(formatPriceFromApiResponse(apiResponse));

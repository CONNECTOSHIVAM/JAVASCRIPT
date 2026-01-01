// Q2. Write a function convertToFahrenheit that takes a temperature in Celsius and
//  converts it to Fahrenheit.

function convertToFahrenheit(temp){
    return temp*(9/5)+32
}


const tempInCelsius = 100;
console.log(convertToFahrenheit(tempInCelsius))
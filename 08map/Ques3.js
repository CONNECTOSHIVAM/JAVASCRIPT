// Q3. celsius to fahrenheit

function celsiusToFahrenheit(celsius){
    return celsius.map((cel)=>{
        return (cel*9/5)+32
    })
}


const celsius = [0, 20, 37, 100]
console.log(celsiusToFahrenheit(celsius));







let getTemperature = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit - 32) * (5/9) + 273.15
    }
}

let tempConverted = getTemperature(50);
console.log(tempConverted);
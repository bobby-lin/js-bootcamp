function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

function fahrenheitToKelvin(fahrenheit) {
    return fahrenheitToCelcius(fahrenheit) + 273.15;
}

console.log(fahrenheitToCelcius(32));
console.log(fahrenheitToKelvin(32));
// This is how we give default value for arguments in a function
let getScoreText = function(name = 'Anonymous', score = 0) {
    console.log(`Name is ${name} and Score is ${score}`);
}

getScoreText(); // Name and Score will be default values
getScoreText('Johnny'); // Score will be default value
getScoreText('Johnny', 99); // Using provided values

let getTipValue = function(total, tipPercent = 0.2) {
    return total * tipPercent;
}

console.log(getTipValue())
console.log(getTipValue(100))
console.log(getTipValue(100, 0.5))

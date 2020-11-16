let max = 5;
let min = 1;

let makeGuess = function(num) {
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Random num=${randNum}, Guess=${num}`);
    return randNum === num;
}

console.log(makeGuess(4))
console.log(makeGuess(4))
console.log(makeGuess(4))
console.log(makeGuess(4))
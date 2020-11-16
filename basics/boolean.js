let age = 5;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(`Age: ${age}, isChild: ${isChild}, isSenior: ${isSenior}`);

age = 3;
if (age <= 7) {
    console.log('Child ticket price is 5 dollars');
} else if (age >= 65) {
    console.log('Senior ticket price is 2 dollars');
} else {
    console.log('Normal ticket price is 20 dollars');
}
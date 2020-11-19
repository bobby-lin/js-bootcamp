// Difference between === and == comparison operator?
// == does not take type into account
// === will take type into account
// typeof can be used to find the type of the variable

console.log("5" == 5); // true because JS does not check the type of the value.
console.log("5" === 5); // false because the type (string vs integer) is different

console.log('5' + 5) // this is concatenating the string
console.log('5' - 5) // Since there is no string function using -, this is treated as Math operations

console.log(typeof "string");
console.log(typeof 1.9);
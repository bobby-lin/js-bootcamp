/*
We prefer to use let / const over var declaration
var is :
1) functional scope rather than block scope
2) Hoisted to the top
*/

if(true) {
    var foo = "hello";
}

function foobar() {
    var foo2 = "hello2";
}

console.log(foo); // This can be printed because it is declared with var
// This will not work for var declared variable as it is functionally scope.
//console.log(foo2); 

var age;
console.log(age)

/*
Notice age2 is used before var declared.
But since var is hoisted, the actual code actually looks like this:
var age2;
console.log(age2);
*/
console.log(age2)
var age2;
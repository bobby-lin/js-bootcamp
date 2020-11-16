/*
undefined means that the variable is declared but no value is assigned
null is used when the developer wants to explicitly clear the variable value
*/
let name;

let getNameUpperCase = function(name) {
    if (name == undefined) {
        console.log("Please provide a name in the function");
    } else {
        console.log(`${name.toUpperCase()}`)
    }
}

getNameUpperCase();
getNameUpperCase("johnny")

let name2 = "Johnny";
name2 = null;
console.log(name2);
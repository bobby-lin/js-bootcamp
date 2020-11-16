// Know what is the difference between let, var and const
/*
Variables declared with var are added to global window object. 
You can access the var variable from window object.
You use var if you want to use the variable globally across different programs.

Variables declared with let are scoped to the immediate block.
*/

try {
    const NAME = "John";
    NAME = "Jack";
    console.log(NAME);
} catch (error) {
    console.log("Error. Did you try to change a constant variable?")
}

let city = "Paris";
let country = "France"
let location = `${city}, ${country}`
console.log(location);

function run() {
    var foo = "Foo";

    {
        let foo2 = "Foo2"
    }

    try {
        console.log(foo2);
    } catch (error) {
        console.log("Variable declared with let is scoped in it's immediate block. So you can't access it")
    }

}

run()
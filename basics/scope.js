/*
In JS, the code within { } is considered as one code block.
Scope Rules:
Global Scope -> No parent, can be access by child scope
Local Scope -> Can access the Global scope variables. It cannot be accessed outside of local scope.
Variable shadowing: The called variable will take the local scope variable value first if there are two similar variable name (global and local)
*/

// Global scope: v1
    // Local scope: v2
        // Local scope: v3, can access v1 and v2
// Cannot access v2 or v3

let v1 = "v1";

{
    console.log(v1);
    let v2 = "v2";
    {
        let v3 = "v3";
        console.log(v2);
    }
}
try {
    console.log(v3);
} catch (error) {
    console.log("Did you try to access a local scope variable")
}

// Variable Shadowing Example

let v1_test = "v1-global";

{
    let v1_test = "v1-local";
    {
        console.log(v1_test); // It will take the value of v1_test in the local scope instead of the global variable
    }
}

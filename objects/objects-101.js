/*
Three major things: 
1) Create objects
2) Reading properties value (Use dot notation)
3) changing properties values
*/

let person = {
    name: "John",
    age: 55,
    location: "France"
}

let message = `${person.name} is age ${person.age} and lives in ${person.location}`;
console.log(message);

person.age = person.age + 1
message = `Next year, ${person.name} will be age ${person.age} and lives in ${person.location}`;
console.log(message);
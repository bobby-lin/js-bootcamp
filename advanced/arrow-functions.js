// Arrow function is useful for writing one-liner function
// arguments do not work in arrow function
// Arrow function does not bind local object variables such as this.X

const userProfiles = [{
    name: "John",
    age: 22
}, {
    name: "Jane",
    age: 30
},
{
    name: "Smith",
    age: 40
}]

const getAgeBelow40 = function(userProfiles) {
    const filteredUsers = userProfiles.filter(function(user) {
        return user.age < 40;
    })

    return filteredUsers;
}

// Shorten the function with arrow function
const getAgeBelow40Short = function(userProfiles) {
    const filteredUsers = userProfiles.filter((user) => user.age < 40);
    return filteredUsers;
}

console.log(getAgeBelow40Short(userProfiles));
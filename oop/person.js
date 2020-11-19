const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`;

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
}

const personX = new Person("John", "Smit", 20, ['cycling', 'jogging'])
personX.setName("Jane Tan");
console.log(personX.getBio())
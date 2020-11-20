class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age} years old.`;
    
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
    
        return bio;
    }

    set fullName(fullName) {
        const names = fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }

    getBio() {
        return `${this.fullName} works as a ${this.position}`;
    }

    getAgeToRetirement() {
        return 65 - this.age;
    }
}

const employee = new Employee("John", "Lee", 28, "Engineer");
console.log(employee.getBio());
console.log(employee.getAgeToRetirement());

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age)
        this.grade = grade;
    }

    getBio() {
        if(this.grade >= 70) {
            return `${this.firstName} is passing the class.`;
        } else {
            return `${this.firstName} is failing the class.`;
        }
    }

    updateGrade(grade) {
        this.grade += grade;
    }
}

const student = new Student("Jane", "Tan", 22, 80);
console.log(student.getBio())
student.updateGrade(-40);
console.log(student.getBio())
student.updateGrade(60);
console.log(student.getBio())
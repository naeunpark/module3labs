/* 10. The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => {
        if (this.age > 18) {
            return true;
        } else {
            return false;
        }
    };
}

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        if (this.age > 18) {
            return true;
        } else {
            return false;
        }
    };
}

let Chris = new Person('Chris', 18);
let Catherine = new Person('Catherine', 30);
let Cassy = new PersonClass('Cassy', 40);


console.log(Chris);
console.log(Chris.canDrive());

console.log(Catherine);
console.log(Catherine.canDrive());

console.log(Cassy);
console.log(Cassy.canDrive());
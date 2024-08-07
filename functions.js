// let example = console.log("hello");
// console.log(example);

// let example = math.log10(1000);
// console.log(example);

// What is a function
// How to create a function
function sayHello() {
    console.log("Hello");
    console.log("Welcome");
    console.log("This is the Front-end class");
  }
  const sayHello2 = () => {
    console.log("Hello");
    console.log("Welcome");
    console.log("This is the Front-end class");
  };
  sayHello();
  function sum(a, b) {
    return a + b;
  }
  function difference(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  console.log(sum(multiply(2, 3), divide(10, 5)));
  const someValues = [(a, b) => a ** b, 90, "My Name"];
  const power = someValues[0];
  const value = someValues[1];
  console.log(power(value, 2));
  const ovie = {
    firstName: "Ovie",
    lastName: "Ukporhe",
    age: 14,
    nextAge: () => ovie.age + 1,
  };
  console.log(ovie.nextAge());
  class Student {
    firstName;
    lastName;
    scores;
    subjects;
    age;
    sex;
    constructor(firstName, lastName, age, sex) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.sex = sex;
      this.scores = [];
      this.subjects = [];
    }
    fullName() {
      return this.firstName + " " + this.lastName;
    }
    nextAge = () => this.age + 1;
  }
  const student1 = new Student("Ovie", "Ukporhe", 14, "Male");
  console.log(student1.nextAge());
  // Some applications of functions

// Variables
//      -> Value and Value Types
//          - Number (Int e.g 1, 2, 3; Float e.g. 1.2, 0.9, e.t.c)
//          - String (e.g. "Hello", "Hi123&", e.t.c)
//          - Boolean (e.g. true, false)
//          - Null (null)
//          - Undefined (undefined)
//          - NaN (Not a Number, e.g. Result of :1/0);
//          - Array (List of value, e.g. [1, 2, 3, 4] or ["A", 1, null])
//          - Objects (Like a dictionary e.g. {name: "Victor", age: 17})
//          - Class Object
// # keywords to define a variable: let, var, const;
var name = "Ovie"; // undefined
let age = 10; // undefined
const time = null;
const fruits = ["Apples", "Bananas", "Watermelons"];
const ovie = {
  firstName: "Ovie",
  lastName: "Ukporhe",
  age: 14,
  "best colour": "black",
  complexion: "chocolate",
};
class NameOfClass {
  firstName = "Ovie";
  lastName = "Ukporhe";
  age = 14;
}
const instanceOfClass = new NameOfClass();
// instanceOfClass.age += 4;
instanceOfClass = 18;
// 14++;
// console.log(name, age, time);
// console.log(
//   instanceOfClass.age >= 18
//     ? "He is an Adult"
//     : "He is a Teen"
// );
console.log(age + 10);
// Expressions & Operations
// Statements
// Functions
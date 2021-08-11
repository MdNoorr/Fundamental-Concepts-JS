// Syntax
// var obj = {
//     key : value
// }

var obj2 = {
  name: "Nur",
  class: 12,
  profession: "Students",
};

console.log(obj2);
// Dot Notation
console.log(obj2.class);
console.log(obj2.name);

// Bracket Notation
console.log(obj2["class"]);
console.log(obj2["profession"]);

// Change Value
obj2.class = 13;
obj2.profession = "Web Developer";

console.log("New Class " + obj2.class);
console.log("New Class " + obj2["class"]);

console.log("New Profession " + obj2["profession"]);

// Add Key and Value
obj2.gender = "Male";
obj2.age = 18;
console.log(obj2);

// Object Declaration
var student = {
  name: "John",
  roll: 10,
  class: "Ten",
  section: "Science",
};

// Dot Notation
console.log(student)
console.log(student.class)
console.log(student.section)
console.log(student.name);


// Bracket Notation
console.log(student['class'])
console.log(student['section'])
console.log(student['name']);
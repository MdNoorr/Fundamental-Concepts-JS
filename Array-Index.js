var books = ["Quran", "Hadith", "Physics", "Chemistry", "Math"];
console.log(books);
console.log(books.length);

var quran = books.indexOf("Quran");
console.log("Index of Quran : ", quran);

var physics = books.indexOf("Physics");
console.log("Index of Physics : ", physics);

var math = books.indexOf("Math");
console.log("Index of Math : ", math);

var numbers = ["1", "2", "3", 1, 2, 3];
console.log(numbers);

// Set Index
numbers[3] = "4";
console.log(numbers);

numbers[4] = "5";
numbers[5] = "6";
numbers[6] = "7";
console.log(numbers);

// Index start from 0 (Zero)
var seven = numbers.indexOf("7");
console.log(seven);

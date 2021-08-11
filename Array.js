// What is Array ?
// In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index. ... First, an array can hold values of different types. For example, you can have an array that stores the number and string, and boolean values. Second, the length of an array is dynamically sized and auto-growing.

// An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example)

var array = [1, 2, 3, 4, 5, 6, "hello", true, false, "world"];
console.log(array);
console.log(array.length);

var vowels = ["a", "e", "i", "o", "u"];
console.log(vowels);

var friendAge = [11, 12, 13, 14, 15];
console.log(friendAge);
console.log(friendAge.length);

var PlayerName = ["Neymar", "Messi", "Ronaldo", "M Salah", "Mbappe"];
console.log(PlayerName);
console.log(PlayerName.length);

var evenNumber = [0, 2, 4, 6, 8, 10];
console.log(evenNumber);
console.log(evenNumber.length);

var oddNumber = [1, 3, 5, 7, 9];
console.log(oddNumber);
console.log(oddNumber.length);

// Array Declaration
var friendAge = ['11', 12, 13, 14, 15]
// console.log(friendAge);

// var friendName = ["Neymar", "Messi", 'Mbappe', 'Msalah', 'Mbapp', "Neymar", "Messi", 'Mbappe', 'Msalah', 'Mbapp', "Neymar", "Messi", 'Mbappe', 'Msalah', 'Mbapp']
// console.log(friendName);
// console.log(friendName.length)

var vowels = ['a', 'e', 'i', 'o', 'u']
console.log(vowels.length)

// Array Method 
console.log(vowels.indexOf('i'))
console.log(vowels.index)
console.log("u is index of : ", vowels.indexOf('u'))
console.log('a is index of : ', vowels.indexOf('a'))
// Syntax
// for (initialization; condition: increment/decrement) {
// Statement
// }

for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 0; i <= 100; i++){
    console.log('I love my Country ' + i);
}

// EACH ELEMENT OF AN ARRAY
var array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log("Array Element " + i + ": " + element);
}

var array = [1, 2, 3, 4, 5, "Nur", "Muhammad"];
for (var i = 0; i < array.length; i++) {
  console.log("Array Element " + i + ": " + array[i]);
}

var num = 0;
while (num <= 100) {
    console.log(num)
    num++;
    // num = num + 1;
}


for (var i = 0; i <= 10; i++) {
  console.log(i)
}
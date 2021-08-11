var time = new Date();
console.log(time);

var year = time.getUTCFullYear();
var newYear = time.getFullYear();

console.log(newYear, year);


time.getHours()
time.getMinutes();
time.getSeconds();
time.getMilliseconds();
time.getTime();
time.getMonth()
console.log(time.toLocaleTimeString())
console.log(time.toTimeString())
console.log(time.toLocaleDateString())
console.log(time.toDateString())
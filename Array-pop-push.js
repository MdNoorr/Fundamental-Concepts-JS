// Array Push Method
var lastBench = ['Nur', 'Zihad', 'Darda', 'Didar']
console.log(lastBench)
lastBench.push('AK Azad')
lastBench.push('Ashraful Siddque')
lastBench.push('Dr Nuhu Mahmud')
console.log(lastBench)

var age = [11, 12, 13]
age.push(14)
age.push(15)
age.push(16)
console.log(age)

// Array Pop Method =>  Removes the last element from an Array
lastBench.pop()
console.log(lastBench)

lastBench.pop()
console.log(lastBench)


var array = [1, 2, 3, 4, 5, 6, 7]
console.log(array)
// System 1
console.log('System 1 : ' + array.length)

// System 2
var length = array.length
console.log("System 2 : " + length)

// Push Method
array.push(8)
array.push(9)
array.push(10)
array.push('Khailil')
array.push('Jabbar')
console.log(array)

// Pop Method
console.log(array.pop())
array.pop()
array.pop()
console.log(array)
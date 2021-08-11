function add(x, y) {
  return x + y;
}

var sum = add(11, 22);
console.log(sum);

console.log(add(11, 22));

function myFunction() {
  var day = "Today is : ";
  switch (new Date().getDay()) {
    case 0:
      return day + "Sunday";
      break;
    case 1:
      return day + "Monday";
    case 2:
      return day + "Tuesday";
    case 3:
      return day + "Wednesday";
    case 4:
      return day + "Thursday";
    case 5:
      return day + "Friday";
    case 6:
      return day + "Saturday";
    default:
      return day + "Unknown Day";
  }
}

console.log(myFunction());

// 2nd System
// function myFunction() {
//     var day = "";
//     switch (new Date().getDay()) {
//       case 0:
//         return (day = "Sunday");
//         break;
//       case 1:
//         return (day = "Monday");
//       case 2:
//         return (day = "Tuesday");
//       case 3:
//         return (day = "Wednesday");
//       case 4:
//         return (day = "Thursday");
//       case 5:
//         return (day = "Friday");
//       case 6:
//         return (day = "Saturday");
//       default:
//         return (day = "Unknown Day");
//     }
//   }

//   console.log(myFunction());

function myFunction() {
  switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    default:
      console.log("Looking forward to the Weekend");
      break;
    case 4:
    case 5:
      console.log("Soon it is Weekend");
      break;
    case 0:
    case 6:
      console.log("It is Weekend");
  }
}

myFunction();

// Last Example
function myFunction(favDrink) {
  var text = "";
  switch (favDrink) {
    case "7UP":
      return (text = "Excellent choice. Martini is good for your soul.");
    case "MOJO":
      return (text = "Daiquiri is my favorite too!");
    case "JUICE":
      return (text = "Really? Are you sure the Cosmopolitan is your favorite?");
    default:
      return (text = "I have never heard of that one..");
  }
}

var result = myFunction("7UP");
console.log(result)


// function add(m, n) {
//   return m + n;
// }
// var sum = add(1, 2)
// console.log(sum)

// console.log(add(11, 22))



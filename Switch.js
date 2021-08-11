var number = 0;
switch (number) {
  case 0:
    console.log("I love you");
    break;
  case 1:
    console.log("I love my my Country");
    break;
  case 2:
    console.log("I love Bangladesh ");
    break;

  default:
    console.log("Not A Number");
    break;
}

var date = new Date().getDay();
// console.log(date);
switch (date) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("Please Correct Number");
}

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

var num = 7;
switch (num) {
  case 1:
    console.log("I am One");
    break;
  case 2:
    console.log("I am Two");
    break;
  case 3:
    console.log("I am Three");
    break;
  case 4:
    console.log("I am Four");
    break;
  case 5:
    console.log("I am Five");
    break;
  case 6:
    console.log("I am Six");
    break;
  case 7:
    console.log("I am Seven");
    break;

  default:
    console.log("hurrrrrrrahhhh.......");
    break;
}

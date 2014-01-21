// single line comment
/* multiple
 * line
 * comment
 * just
 * like
 * C, C++
*/

console.log("this should display to the browser window.");
console.log("Kenneth Jernigan");

//debugger

var a = 10;
var b = 20;
var c = a + b;
var d = c * b;
var e = d * (b - a);

var power = Math.pow(2,8);

var width = 8;
var length = 12;
var area = width * length;

console.log("e is " + e);
console.log("2 to the 8th power is " + power);

console.log("The room's area in square feet is " +area);
console.log("The area of a room that is 8 feet by 12 feet is " +area +" square feet");

var radius = 5;
var height = 9;
var circleArea = Math.PI * Math.pow(radius,2);
var volumeCylinder = circleArea * height;
var message = ("The volume of a cylinder with a radius of 5 inches and height of 9 inches is " + volumeCylinder + " cubic inches");
console.log(message);

var bucketSize = 29572;
var roomOne = 3 * 5;
var roomTwo = 7 * 9;
var roomThree = 6 * 2;
var floorArea = roomOne + roomTwo + roomThree;
var houseTotal = Math.floor(bucketSize / floorArea);
var houseMessage = ("You can paint a total of " + houseTotal + " houses before your Magic Bucket of Paint +3 is empty.");
console.log (houseMessage);


var firstName = prompt('Enter your first name');

console.log('your first name is ' + firstName);

var lastName = prompt('Enter your Last name');
console.log('Your full name is ' + firstName + ' ' + lastName);

//debugger

var l = prompt('Enter the length of your room');
var w = prompt('What is the width of your room');
var h = prompt('What is the height of your room');
h = parseInt(h);
w = parseInt(w);
l = parseInt(l);
var volume = l * w * h;
console.log("The volume of your room is " + volume);


var age = prompt('What is your age?');
age = parseInt(age);
if (age < 18)
  console.log("You cannot vote.");
  else
  console.log("You can vote.");









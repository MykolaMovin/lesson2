// Practical task 1
let x = 1;
let y = 2;
let res1 = String(x) + y

console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = !!x + String(y);

console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = x < y;

console.log(res3); // true
console.log( typeof res3); // " boolean "

let res4 = String(y) - String(!!x)// Add code is required use variables x and y

console.log(res4); // NaN
console.log( typeof res4); // "number"

// Practical task 2
let number = prompt('Please, enter a number');
if(number > 0 && number % 7 == 0) console.log(`That's a correct number`);

// Practical task 3
let array = [];
array[0] = 42;
array[1] = 'Hello World!';
array[2] = x > y;
array[3] = null;
alert(array.length);
array[4] = prompt('Enter any number');
alert(array[4]);
array.shift();

// Practical task 4
let cities = [" Rome ", " Lviv ", " Warsaw "];
let ribbon = "";
let index = 1;
cities.forEach((city) => {
    if(index < cities.length) {
        ribbon += (city +"*");
        index++
    } else ribbon += city;
});
console.log(ribbon)

// Practical task 5

let isAdult = prompt('How old are you?')
let isAdultMessage = (isAdult >= 18) ? alert('You have reached the age of majority.'): 
(isAdult < 18) ? alert('You are still too young'):
alert('Please, enter try again');

// Practical task 6

a = Number(prompt('Enter the lengt for the first side'));
b = Number(prompt('Enter the lengt for the second side'));
c = Number(prompt('Enter the lengt for the last side'));

let p = (a + b + c) / 2;
let areaOfTriangle = Math.sqrt(p * (p - a) * (p - b) * (p - c));
let areaOfTriangle1 = (c > a && c > b) ? (a * b) / 2:
(b > a && b > c) ? (a * c) / 2:
(c * b) / 2;
areaOfTriangle = areaOfTriangle.toFixed(3);
areaOfTriangle1 = areaOfTriangle1.toFixed(3);
let rectangularTriangle = (areaOfTriangle == areaOfTriangle1);

// Practical task 7

let date = new Date();
let time = date.getHours();

let timeMessage = (time >= 23 || time < 5) ? alert(" Good night " ):
(time >= 5 && time < 11) ? alert(" Good morning " ):
(time >= 11 && time < 17) ? alert (" Good day " ): alert(" Good evening "); 
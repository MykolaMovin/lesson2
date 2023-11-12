// Practical task 1
let x = 1;
let y = 2;
let res1 = String(x) + y;

console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = !!x + String(y);

console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = x < y;

console.log(res3); // true
console.log( typeof res3); // " boolean "

let res4 = String(y) - String(!!x);

console.log(res4); // NaN
console.log( typeof res4); // "number"

// Practical task 2
let number = prompt('Please, enter a number');

if(number > 0 && number % 2 == 0) console.log(`That's a correct number`); // a) even & positive
if(number % 7 == 0) console.log(`That's a correct number`); // b) multiple of 7 

// Practical task 3
const array = [];
array[0] = 42;
array[1] = 'Hello World!';
array[2] = x > y;
array[3] = null;
alert(array.length);
array[4] = prompt('Please,enter any value');
alert(array[4]);
array.shift();

// Practical task 4
const cities = [" Rome ", " Lviv ", " Warsaw "];
let ribbon = "";
let index = 1;
cities.forEach(city => {
    if(index < cities.length) {
        ribbon += (city +"*");
        index++;
    } else ribbon += city;
});
console.log(ribbon);

// Practical task 5

let isAdult = prompt('How old are you?');
let isAdultMessage = (isAdult >= 18) ? alert('You have reached the age of majority.'): 
    (isAdult < 18) ? alert('You are still too young'):
    alert('Please, try again');

// Practical task 6

firstTriangleSide = Number(prompt('Enter the lengt for the first side'));
secondTriangleSide = Number(prompt('Enter the lengt for the second side'));
thirdTriangleSide = Number(prompt('Enter the lengt for the last side'));

let p = (firstTriangleSide + secondTriangleSide + thirdTriangleSide) / 2;
let areaOfTriangle = Math.sqrt(p * (p - firstTriangleSide) * (p - secondTriangleSide) * (p - thirdTriangleSide));
let areaOfRectangularTriangle = (thirdTriangleSide > firstTriangleSide && thirdTriangleSide > secondTriangleSide) ? (firstTriangleSide * secondTriangleSide) / 2 :
    (secondTriangleSide > firstTriangleSide && secondTriangleSide > thirdTriangleSide) ? (firstTriangleSide * thirdTriangleSide) / 2 :
    (thirdTriangleSide * secondTriangleSide) / 2;
areaOfTriangle = areaOfTriangle.toFixed(3);
areaOfRectangularTriangle = areaOfRectangularTriangle.toFixed(3);
let rectangularTriangle = (areaOfTriangle == areaOfRectangularTriangle) ? console.log('Triangle is Rectangular') : console.log('Triangle is NOT Rectangular');

// Practical task 7

let date = new Date();
let time = date.getHours();
let timeMessage = (time >= 23 || time < 5) ? alert(" Good night " ):
    (time >= 5 && time < 11) ? alert(" Good morning " ):
    (time >= 11 && time < 17) ? alert (" Good day " ): alert(" Good evening ");
    
if(time >= 23 || time < 5) {
        alert(" Good night " );
    } else if (time >= 5 && time < 11){
        alert(" Good morning " );
    } else if (time >= 11 && time < 17){
        alert (" Good day " );
    } else{
        alert(" Good evening ");
    };

//Level1

let firstName = "Ajithkar";
let secondName = "Palanivel";
let country = "SriLanka";
let city = "Vavuniya"
let age = 26;
let isMarried = False;
let year = 2026;
 console.log(typeof firstName);
 console.log(typeof lastName);
 console.log(typeof country);
 console.log(typeof city);
 console.log(typeof age);
 console.log(typeof isMarried);
 console.log(typeof year);

console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8') === 10);

console.log(Boolean('Hello'));
console.log(Boolean(5));
console.log(Boolean([]));

console.log(Boolean(0));
console.log(Boolean(Null));
console.log(Boolean(undefined));

4 > 3;
4 >= 3;	
4 < 3;	
4 <= 3;	
4 == 4;	
4 === 4;	
4 != 4;
4 !== 4;	
4 != '4';
4 == '4';
4 === '4';

const pythonLen = 'python'.length;
const jargonLen = 'jargon'.length;
console.log(pythonLen !== jargonLen);

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')

console.log(!('python'.includes('on')&& 'dragon'.includes('on')));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
console.log(Math.floor(Date.now() / 1000));

//Level2

let base = prompt('Enter base:');
let height = prompt('Enter height:');
let area = 0.5 * base * height;
console.log('The area of the triangle is ${area}');

let sideA = Number(prompt('Enter side a:'));
let sideB = Number(prompt('Enter side b:'));
let sideC = Number(prompt('Enter side c:'));
let perimeter = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeter}`);

let length = Number(prompt('Enter length:'));
let width = Number(prompt('Enter width:'));
let rectArea = length * width;
let rectPerimeter = 2 * (length + width);
console.log(`Area: ${rectArea}, Perimeter: ${rectPerimeter}`);

const PI = 3.14;
let radius = Number(prompt('Enter radius:'));
let circleArea = PI * radius * radius;
let circumference = 2 * PI * radius;
console.log(`Area: ${circleArea}, Circumference: ${circumference}`);

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let m2 = (y2 - y1) / (x2 - x1);
console.log(`The slope is ${m2}`);

console.log(2 === m2);

let x = -3;
let y = x**2 + 6 * x + 9;
console.log(`At x = ${x}, y is ${y}`);

let hours = prompt('Enter hours:');
let rate = prompt('Enter rate per hour:');
let earning = hours * rate;
console.log(`Your weekly earning is ${earning}`);

let name = 'Ajithkar';
name.length > 7 
    ? console.log('Your name is long') 
    : console.log('Your name is short');

let firstName = 'Vijay';
let lastName = 'Kumar';
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}

let myAge = 26;
let yourAge = 25;
let diff = myAge - yourAge;
console.log(`I am ${diff} years older than you.`);

let birthYear = prompt('Enter birth year:');
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    let wait = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${wait} years.`);
}

let yearsLive = prompt('Enter number of years you live:');
let secondsInYear = 31536000; // 60 * 60 * 24 * 365
let totalSeconds = yearsLive * secondsInYear;
console.log(`You lived ${totalSeconds} seconds.`);

const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0');
const date = String(d.getDate()).padStart(2, '0');
const hours = String(d.getHours()).padStart(2, '0');
const mins = String(d.getMinutes()).padStart(2, '0');

// 1. YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${date} ${hours}:${mins}`);
// 2. DD-MM-YYYY HH:mm
console.log(`${date}-${month}-${year} ${hours}:${mins}`);
// 3. DD/MM/YYYY HH:mm
console.log(`${date}/${month}/${year} ${hours}:${mins}`);

//Level3

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2 '0');
const minutes = String(now.getMinutes()).padStart(2 '0');
const formattedTime = '${years}-${month}-${day}-${hourse}:${minutes}';
console.log(formattedTime);

//Level4

let age = Number(prompt("Enter your age:"));
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let waitYears = 18 - age;
  console.log(`You are left with ${waitYears} years to drive.`);
}

let myAge = 25;
let yourAge = Number(prompt("Enter your age:"));
if (yourAge > myAge) {
  let diff = yourAge - myAge;
  console.log(`You are ${diff} years older than me.`);
} else if (myAge > yourAge) {
  let diff = myAge - yourAge;
  console.log(`I am ${diff} years older than you.`);
} else {
  console.log("We are the same age!");
}

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

let result = a > b 
  ? `${a} is greater than ${b}` 
  : `${a} is less than ${b}`;

console.log(result);

let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number.`);
}

//Level5

let score = Number(prompt("Enter student score:"));
if (score >= 80 && score <= 100) {
    console.log('Grade: A');
} else if (score >= 70 && score < 80) {
    console.log('Grade: B');
} else if (score >= 60 && score < 70) {
    console.log('Grade: C');
} else if (score >= 50 && score < 60) {
    console.log('Grade: D');
} else if (score >= 0 && score < 50) {
    console.log('Grade: F');
} else {
    console.log('Invalid score entered.');
}

let monthInput = prompt("Enter a month:").toLowerCase();
switch (monthInput) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn.');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter.');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring.');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer.');
        break;
    default:
        console.log('Invalid month.');
}

let dayInput = prompt("What is the day today?").toLowerCase();
let dayFormatted = dayInput.charAt(0).toUpperCase() + dayInput.slice(1);
if (dayInput === 'saturday' || dayInput === 'sunday') {
    console.log(`${dayFormatted} is a weekend.`);
} else if (
    dayInput === 'monday' || 
    dayInput === 'tuesday' || 
    dayInput === 'wednesday' || 
    dayInput === 'thursday' || 
    dayInput === 'friday'
) {
    console.log(`${dayFormatted} is a working day.`);
} else {
    console.log('That is not a valid day of the week.');
}

//Level6

let monthInput = prompt("Enter a month:").toLowerCase();
let month = monthInput.charAt(0).toUpperCase() + monthInput.slice(1);
switch (monthInput) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${month} has 31 days.`);
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${month} has 30 days.`);
    break;
  case 'february':
    console.log(`${month} has 28 days.`);
    break;
  default:
    console.log("Invalid month entered.");
}

let monthInput = prompt("Enter a month:").toLowerCase();
let year = new Date().getFullYear();
let month = monthInput.charAt(0).toUpperCase() + monthInput.slice(1);

// Leap year logic
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

switch (monthInput) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${month} has 31 days.`);
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${month} has 30 days.`);
    break;
  case 'february':
    if (isLeapYear) {
      console.log(`${month} has 29 days (Leap Year).`);
    } else {
      console.log(`${month} has 28 days.`);
    }
    break;
  default:
    console.log("Invalid month entered.");
}
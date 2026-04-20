const emptyArray = [];
const numbers = [10, 20, 30, 40, 50, 60, 70,]
console.log(numbers.length);
let firstItem = numbers[0];
let middleItem = numbers[Math.floor(numbers.length / 2)];
let lastItem = numbers[numbers.length - 1];
const mixedDataTypes = ['String', 42, true, { key: 'value' }, [1, 2, 3], null];
console.log(mixedDataTypes.length);
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
itCompanies.forEach(company => console.log(company));
itCompanies.forEach(company => console.log(company.toUpperCase()));
console.log(`${itCompanies.slice(0, -1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);
const checkCompany = (name) => {
    return itCompanies.includes(name) ? name : 'company is not found';
  };
  console.log(checkCompany('Google'));
  const filteredCompanies = [];
for (const company of itCompanies) {
  let count = 0;
  for (const letter of company.toLowerCase()) {
    if (letter === 'o') count++;
  }
  if (count > 1) filteredCompanies.push(company);
}
console.log(filteredCompanies); // ['Facebook', 'Google', 'Microsoft']

itCompanies.sort();
itCompanies.reverse();
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));
const middleIndex = Math.floor(itCompanies.length / 2);
const middleSized = itCompanies.length % 2 === 0 
  ? itCompanies.slice(middleIndex - 1, middleIndex + 1) 
  : itCompanies.slice(middleIndex, middleIndex + 1);
console.log(middleSized);
itCompanies.shift();
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
itCompanies.pop();
itCompanies.length = 0;

export const countries = ['Sri Lanka', 'India', 'USA', 'Ethiopia', 'Japan'];
export const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB'];
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries);
console.log(webTechs);



//Level2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.replace(/[.,]/g, '').split(' ');

console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Add 'Meat' to beginning if not exists
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// 2. Add 'Sugar' to end if not exists
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// 3. Remove 'Honey' (Simulating allergy)
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
}

// 4. Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

// Assuming countries array is already declared
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

// Using concat
const fullStack = frontEnd.concat(backEnd);

// OR using Spread Operator:
// const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack)



//Level3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array and find min/max
ages.sort((a, b) => a - b); // Sorting numerically
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Sorted Ages: ${ages}`);
console.log(`Min: ${minAge}, Max: ${maxAge}`);

// 2. Find the median age
let median;
const mid = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
    // Even number of items: average of two middle items
    median = (ages[mid - 1] + ages[mid]) / 2;
} else {
    // Odd number of items: middle item
    median = ages[mid];
}
console.log(`Median Age: ${median}`);

// 3. Find the average age
const sum = ages.reduce((acc, curr) => acc + curr, 0);
const average = sum / ages.length;
console.log(`Average Age: ${average}`);

// 4. Find the range
const ageRange = maxAge - minAge;
console.log(`Age Range: ${ageRange}`);

// 5. Compare (min - average) and (max - average)
const minDiff = Math.abs(minAge - average);
const maxDiff = Math.abs(maxAge - average);
console.log(`Abs difference (min - avg): ${minDiff}`);
console.log(`Abs difference (max - avg): ${maxDiff}`);
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
  
  // 1. Slice the first ten countries
  const firstTen = countries.slice(0, 10);
  console.log('First Ten Countries:', firstTen);
  
  // 2. Find the middle country(ies)
  let middleCountries = [];
  const midIdx = Math.floor(countries.length / 2);
  
  if (countries.length % 2 === 0) {
      // Even: take the two middle ones
      middleCountries = countries.slice(midIdx - 1, midIdx + 1);
  } else {
      // Odd: take the single middle one
      middleCountries = [countries[midIdx]];
  }
  console.log('Middle country(ies):', middleCountries);
  
  // 3. Divide the countries array into two equal halves
  let firstHalf, secondHalf;
  // Math.ceil ensures the first half gets the extra country if the length is odd
  const splitPoint = Math.ceil(countries.length / 2);
  
  firstHalf = countries.slice(0, splitPoint);
  secondHalf = countries.slice(splitPoint);
  
  console.log('First Half:', firstHalf);
  console.log('Second Half:', secondHalf);



  //Level4
  // For loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  
  // While loop
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  
  // Do While loop
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j <= 10);
  // For loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  
  // While loop
  let k = 10;
  while (k >= 0) {
    console.log(k);
    k--;
  }
  let n = 5; // You can change this value
for (let i = 0; i <= n; i++) {
  console.log(i);
}
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
  }
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }
  console.log('i    i^2   i^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i**2}     ${i**3}`);
}
// Even
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) console.log(i);
  }
  
  // Odd
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) console.log(i);
  }
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
  let totalSum = 0;
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  totalSum += i;
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`The sum of all numbers from 0 to 100 is ${totalSum}.`);
console.log(`The sum of all evens is ${evenSum}. The sum of all odds is ${oddSum}.`);
console.log([evenSum, oddSum]); // Array format
const randomArr = [];
for (let i = 0; i < 5; i++) {
  randomArr.push(Math.floor(Math.random() * 11)); // Numbers 0-10
}
console.log(randomArr);
const uniqueArr = [];
while (uniqueArr.length < 5) {
  let r = Math.floor(Math.random() * 11);
  if (uniqueArr.indexOf(r) === -1) uniqueArr.push(r);
}
console.log(uniqueArr);
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
  randomId += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomId);



//Level5
// 1. Random ID generator (any number of characters)
const generateId = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };
  console.log(generateId(12));
  console.log(generateId(24));
  
  // 2. Random Hexadecimal Color
  const generateHex = () => {
    const hexChars = '0123456789abcdef';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += hexChars[Math.floor(Math.random() * 16)];
    }
    return hex;
  };
  console.log(generateHex());
  
  // 3. Random RGB Color
  const generateRgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  console.log(generateRgb());
  const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

// 4. Uppercase array
const upperCountries = countries.map(country => country.toUpperCase());

// 5. Lengths array
const countryLengths = countries.map(country => country.length);

// 6. Array of arrays [Name, Code, Length]
const countryData = countries.map(country => [
  country,
  country.slice(0, 3).toUpperCase(),
  country.length
]);
// 7. Check for 'land'
const countriesWithLand = countries.filter(c => c.includes('land'));
console.log(countriesWithLand.length > 0 ? countriesWithLand : 'All these countries are without land');

// 8. Ends with 'ia'
const countriesWithIa = countries.filter(c => c.endsWith('ia'));
console.log(countriesWithIa.length > 0 ? countriesWithIa : 'These are countries ends without ia');

// 9. Biggest number of characters
let longestCountry = countries[0];
for (const country of countries) {
  if (country.length > longestCountry.length) {
    longestCountry = country;
  }
}
console.log(longestCountry);

// 10. Countries with only 5 characters
const fiveCharCountries = countries.filter(c => c.length === 5);
console.log(fiveCharCountries);
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

// 11. Longest word in webTechs
let longestTech = webTechs.reduce((a, b) => (a.length > b.length ? a : b));

// 12. Array of arrays for webTechs
const webTechData = webTechs.map(tech => [tech, tech.length]);

// 13. MERN Acronym
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const acronym = mernStack.map(s => s[0]).join('');
console.log(acronym); // MERN
// 14. Simple iteration
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tech of techs) {
  console.log(tech);
}

// 15. Reverse array without .reverse()
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

// 16. Nested array iteration
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const stack of fullStack) {
  for (const tech of stack) {
    console.log(tech.toUpperCase());
  }
}



//Level6
const countries = ["Albania","Bolivia","Canada","Denmark","Ethiopia","Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
  
  // 1. Copy array without mutation
  const countriesCopy = [...countries];
  
  // 2. Sort the copied array
  const sortedCountries = [...countries].sort();
  
  console.log('Original:', countries);
  console.log('Sorted Copy:', sortedCountries);
  const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();

console.log(sortedWebTechs);
console.log(sortedMernStack);

// 4 & 6. Extract countries containing 'land'
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
console.log(countriesWithLand);

// 5. Country with highest number of characters
const longestCountry = countries.reduce((a, b) => (a.length > b.length ? a : b));
console.log(longestCountry);

// 7. Countries with only four characters
// (Note: In the provided list, there are no 4-letter countries, but here is the logic)
const fourLetterCountries = countries.filter(country => country.length === 4);
console.log(fourLetterCountries);

// 8. Countries containing two or more words
// (Note: Using a sample like 'Sri Lanka' or 'United States' to demonstrate)
const multiWordCountries = countries.filter(country => country.includes(' '));
console.log(multiWordCountries);
const reversedAndCapitalized = [...countries]
  .reverse()
  .map(country => country.toUpperCase());

console.log(reversedAndCapitalized);
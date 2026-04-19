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

console.log(fullStack);
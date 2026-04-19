//Level1
// 1. comments can make code readable
// 2. Welcome to learn Javascript

/* 3. comments can make code readable, 
   easy to reuse and informative 
*/

// 4. variable.js
let firstName = 'Asabeneh'; // string
let isLearning = true;      // boolean
let job = undefined;        // undefined
let emptyValue = null;      // null

// 5. datatypes.js
console.log(typeof 'Asabeneh'); // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (this is a known JS quirk)

// 6. Four variables without values
let varOne, varTwo, varThree, varFour;

// 7. Four variables with values
let country = 'Finland', city = 'Helsinki', age = 100, isMarried = true;

// 8. Variables in multiple lines
let myFirstName = 'John';
let myLastName = 'Doe';
let maritalStatus = 'Single';
let myCountry = 'USA';
let myAge = 25;

// 9. Variables in a single line
let fName = 'John', lName = 'Doe', mStatus = 'Single', ctry = 'USA', currAge = 25;

// 10. Logging ages
let myAgeValue = 25;
let yourAgeValue = 30;
console.log(`I am ${myAgeValue} years old.`);
console.log(`You are ${yourAgeValue} years old.`);



//Level2
// 1 & 2
let challenge = 'learn Javascript';
console.log(challenge);

// 3. Length
console.log(challenge.length); // 16

// 4 & 5. Case change
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

// 6. Slice first word
console.log(challenge.substring(0, 5)); // "learn"

// 7. Slice out 'Javascript' (Note: original string was 'learn Javascript')
console.log(challenge.substring(6)); 

// 8. Includes
console.log(challenge.includes('Script')); // true

// 9 & 10. Split
console.log(challenge.split());      // ["learn Javascript"]
console.log(challenge.split(' '));   // ["learn", "Javascript"]

// 11. Split at comma
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12. Replace
console.log(challenge.replace('learn Javascript', '30 Days Of Python'));

// 13. charAt index 15
console.log(challenge.charAt(15)); // 't'

// 14. charCodeAt 'J' (Index 6)
console.log(challenge.charCodeAt(6)); // 74

// 15 & 16. IndexOf
console.log(challenge.indexOf('a'));     // 2
console.log(challenge.lastIndexOf('a')); // 9

// 17, 18, 19. Search phrases
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));     // 31
console.log(sentence.lastIndexOf('because')); // 47
console.log(sentence.search('because'));      // 31

// 20. Trim
console.log(' learn Javascript '.trim());

// 21 & 22. Starts/Ends with
console.log(challenge.startsWith('learn')); // true
console.log(challenge.endsWith('Javascript')); // true

// 23. Match
console.log(challenge.match(/a/g)); // ["a", "a"]

// 24. Concat
let part1 = '30 Days of';
console.log(part1.concat(' JavaScript'));

// 25. Repeat
console.log(challenge.repeat(2));


//Level3
// 1 & 2. Quotes
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity...\"");

// 3. Check '10' == 10
console.log(typeof '10' === typeof 10); // false
console.log(typeof Number('10') === typeof 10); // true

// 4. parseFloat 9.8 to 10
console.log(Math.round(parseFloat('9.8')) === 10); // true

// 5 & 6. Check 'on'
console.log('python'.includes('on') && 'jargon'.includes('on'));
console.log('I hope this course is not full of jargon'.includes('jargon'));

// 7, 8, 9. Random Numbers
console.log(Math.floor(Math.random() * 101)); // 0-100
console.log(Math.floor(Math.random() * 51) + 50); // 50-100
console.log(Math.floor(Math.random() * 256)); // 0-255

// 10. Random char from 'JavaScript'
let js = 'JavaScript';
let randomIdx = Math.floor(Math.random() * js.length);
console.log(js[randomIdx]);

// 11. Pattern
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 12. Slice 'because because because'
let phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.substr(31, 23));



//Level4
// 1. Count 'love'
let loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveStr.match(/love/gi).length); // 3

// 2. Count 'because'
let becauseStr = 'You cannot end a sentence with because because because is a conjunction';
console.log(becauseStr.match(/because/g).length); // 3

// 3. Clean text (Regex)
const dirtySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let clean = dirtySentence.replace(/[%$@&#;!]/g, '');
console.log(clean);

// 4. Annual Income
let incomeStr = 'He earns 50000 Rs from salary per month, 10000 Rs annual bonus, 15000 Rs online courses per month.';
let amounts = incomeStr.match(/\d+/g); 
let totalIncome = (parseInt(amounts[0]) * 12) + parseInt(amounts[1]) + (parseInt(amounts[2]) * 12);
console.log(totalIncome); // 790000
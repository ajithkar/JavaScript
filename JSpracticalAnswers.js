//Q.01
let x;
console.log(x);
x=33;
console.log(x);

//Q.02
let num = 5;
num++;
console.log(num);
++num;
console.log(num);

//Q.03
let user = {
    name: "Ajith", age: 20
};
user.age = 21;
user.city = "Vavuniya";
console.log(user);

//Q.04
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

//Q.05
let n1 = 25, n2 = 5;
console.log(n1 + n2);

//Q.06
let item = ["pen", "book"];
item.push("bag");
item.splice(1,1);
console.log(items);

//Q.07
let status = false;
console.log(status);
status = true;
console.log(status);

//Q.08
console.log(20 + 5 * 2);
console.log((20 + 5)* 2)

//Q.09
let data = null;
data = 5;
data = "Hi";
console.log(data);

//Q.10
let student = {
    name: "Ajith",
    subject: ["Math"]
};
student.subjects.push("Science");
.console.log(student.subjects[0], student);

Q.11
let a = true;
let b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

//Q.12
let s = "20", n = 5;
console.log(s + n);
console.log(Number(s) + n);

//Q.13
let a = 10; let b = a;
b = 50;
console.log(a);
console.log(b);

//Q.14
let marks = 50;
if (marks >= 35)
    { console.log("Pass"); }
    else { console.log("Fail"); }

//Q.15
let greeter = { 
    greet: function() { return "Hello"; } 
};
console.log(greeter.greet()); 
greeter.greet = function() { return "Hi"; };
console.log(greeter.greet());

//Q.16
let dayNum = 2;
switch(dayNum) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;

//Q.17
console.log("hello" * 2);
console.log(undefined + 5);

//Q.18
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

//Q.19
let m = 80;
if (m >= 75) { console.log("A"); } 
else if (m >= 50) { console.log("B"); } 
else { console.log("C"); }

//Q.20
let marks = 65;
if (marks >= 50) 
    { console.log("Pass"); } 
    else { console.log("Fail"); }
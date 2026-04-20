function fullName(){
    const myName = "Ajithkar Palanivel";
    console.log(myName);
}
function fullName(firatName, lastName){
    return '${firstName} ${lastName}';

}
function addNumbers(numOne, numTwo){
    return numOne + numTwo;
}

function areaOfRectangle(length, width){
    return length * width;
}
function perimeterOfRectangle(length, width){
    return 2 * (length + width);
}
function volumeOfRectPrism(length, width, height)
{
    return length * width * height;
}
function areaOfCircle(r)
{
    return Math.PI * r * r;
}
function circumOfCircle(r)
{
    return 2 * Math.PI * r;
}

function density(mass, volume)
{
    return mass / volume;
}
function speed(distance, time)
{
    return distance / time;
}
function weight(mass, gravity = 9.81)
{
    return mass * gravity;

}
function convertCelsiusToFahrenheit(celsius)
{
    return (celsius * 9/5) + 32;
}

function calculateBmi(weightKg, heightM) 
{
    const bmi = weightKg / (heightM * heightM);
    
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 25) {
      return "Normal weight";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
}
  function checkSeason(month) 
{
    month = month.toLowerCase();
    switch (month) {
      case 'september': case 'october': case 'november':
        return 'Autumn';
      case 'december': case 'january': case 'february':
        return 'Winter';
      case 'march': case 'april': case 'may':
        return 'Spring';
      case 'june': case 'july': case 'august':
        return 'Summer';
      default:
        return 'Invalid month';
    }
}
  function findMax(a, b, c)
{
    let max = a;
    
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    return max;
}
  console.log(findMax(0, 10, 5));
  console.log(findMax(0, -10, -2));
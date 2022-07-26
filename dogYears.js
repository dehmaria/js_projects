//This is my age
const myAge = 31;

//First two years
let earlyYears = 2;

earlyYears *= 10.5;

//The 2 first years are count in earlyYears 
let laterYears = myAge - 2;

//After two first years each human year following equates to 4 dog years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//Total age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//my name in lowercase letters
let myName = 'Deborah'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
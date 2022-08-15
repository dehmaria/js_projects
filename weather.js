//Forecast today
const kelvin = 293;

//Kelvin to Celsius
const celsius = kelvin - 273;

//Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Round down fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Celsius to Newton
let newton = celsius * (33/100);

//Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 18;

if (earlyRegister && runnerAge > 18) {
  raceNumber = raceNumber + 1000;
}

if (runnerAge > 18 && earlyRegister) {
  console.log (`You will race at 9:30 am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !earlyRegister) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`)
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm and your race number is ${raceNumber}`);
} else {
  console.log('You need to see the registration desk.');
}

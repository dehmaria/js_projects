const getSleepHours = day => {
  day = day.toLowerCase();

  const weekdays = {
    'monday' : 8,
    'tuesday' : 7,
    'wednesday' : 7,
    'thursday' : 7,
    'friday' : 5,
    'saturday' : 4,
    'sunday' : 9
  } 
  if(!(day in weekdays)) {
    return 'Error! You should choose a valid day.'
  }
  return weekdays[day]
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed. You slept ${actualSleepHours - idealSleepHours} hours more.`)
  } else if(actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest. You slept ${idealSleepHours - actualSleepHours} hours less than needed.`);
  }
}

calculateSleepDebt();
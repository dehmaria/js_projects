const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Error! You should put rock, or paper, or scissors only.';
  }
}

//console.log(getUserChoice('Scissor'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if(randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2){
    return 'scissors';
  } 
}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'The game is tie.';
  }

  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }

  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }
}

//console.log(determineWinner('paper', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log(`The user chose: ${userChoice}, and the computer chose ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
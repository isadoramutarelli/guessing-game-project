const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let secretNumber = 45;



function askGuess(){
    rl.question('Enter a guess: ', (answer) =>{;
    const guess = Number(answer);
    const isCorrect = checkGuess(guess);

    if(!isCorrect){
        askGuess();
    }else{
        console.log('You win!');
        rl.close();;
    }
});
};


//a function named checkGuess that accepts a number as an argument. It should compare that argument against the global secretNumber
function checkGuess(number){
    if(number > secretNumber){
        console.log('Too high!');
        return false;
    }else if(number < secretNumber){
        console.log('Too low!');
        return false;
    }else{
        console.log('Correct!');
        return true;
    };
};

askGuess();

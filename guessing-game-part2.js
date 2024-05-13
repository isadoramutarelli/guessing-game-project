const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let secretNumber;

const  askRange = (cb) =>{
    rl.question('Enter a max number: ', (max) => {
        rl.question('Enter a min number :', (min) => {
            console.log(`I'm thinking of a umber between ${min} and ${max}...`);
           secretNumber =  randomInRange(Number(min),Number(max));
           cb(min, max);
        });
    });
};


function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};


function askGuess(min, max){
    rl.question('Enter a guess: ', (answer) =>{;
    const guess = Number(answer);
    const isCorrect = checkGuess(guess, min, max);

    if(!isCorrect){
        askGuess();
    }else{
        console.log('You win!');
        rl.close();;
    }
});
};


//a function named checkGuess that accepts a number as an argument. It should compare that argument against the global secretNumber
function checkGuess(number, min, max){
    if(number < min  || number > max){
        console.log(`You need choose  a number between ${min} and ${max}`);
        return false;
    }else {
        if(number > secretNumber){
            console.log('Too high!');
            return false;
        }else if(number < secretNumber){
            console.log('Too low!');
        }else{
            console.log('Correct!');
            return true;
        };
    };
};


askRange(askGuess);

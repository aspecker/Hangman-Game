// Javascript for Hangman Game Adam Specker

// Calling variables
var words = ["plholdzero","plholdtwo","plholdthree",];
var guessWord = "";
var guesses = [];
var userLives = 10;
var answerArray=[];
    

// selecting a random word from words array
function newWord(){

guessWord =words[Math.floor(Math.random() * words.length)];

}
//Fills answerArray with underscores based on word length
function newAnswer (){

for (var i = 0; i <guessWord.length;i++){
    answerArray[i]= " _ ";
}
    var remainingLetters = guessWord.length;
}

// If guessword is empty creates a new word, if not outputs the current answerArray
function drawWord(){
    while (guessWord == ''){
        newWord ();
    }
   
    document.getElementById("currentWord").innerHTML = answerArray.toString();
}

//Check if user guess is present, add to answer array, or else subtract a life

function wrongGuess(){
    userLives--;
    document.getElementById("livesLeft").innerHTML = ("You have "+ userLives + " lives left.")
    guesses.push(guess);
    document.getElementById("guessedLetters").innerHTML = (guesses);
}

function userGuess (){
    document.onkeyup = function(event){
    var guess = String.fromCharCode(event.which).toLowerCase();
        for (var j = 0; j < guessWord.length; j++) {
    
        if (guessWord[j] === guess) {
        answerArray[j] = guess;
        drawWord();
        } 
        else {
            userLives--;
            document.getElementById("livesLeft").innerHTML = ("You have "+ userLives + " lives left.")
            guesses.push(guess);
            document.getElementById("lettersGuessed").innerHTML = guesses;
        }
        }
    }
}

window.onload = function(){

newWord();
console.log(guessWord);

newAnswer ();
console.log (answerArray);

drawWord();


userGuess();

console.log(userLives);

}



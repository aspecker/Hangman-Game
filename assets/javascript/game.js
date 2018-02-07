// Javascript for Hangman Game Adam Specker

// Calling variables
var words = ["plholdone","plholdtwo","plholdthree",],
    guessWord = "",
    guesses = [],
    userLives = 10,
    answerArray = [];

// selecting a random word from words array
function newWord(){

guessWord =words[Math.floor(Math.random() * words.length)];

}
//Fills answerArray with underscores based on word length
function newAnswer (){

for (var i = 0; i <guessWord.length;i++){
    answerArray[i]= "_";
}
}

//Check if user guess is present, add to answer array, or else subtract a life
// *** Needs to have a section to gather the keypress input
function userGuess (){
    
    for (var j = 0; j < guessWord.length; j++) {
    
        if (guessWord[j] === guess) {
    answerArray[j] = guess;
    
    } else {
        userLives --;

    }
    }
}

// If guessword is empty creates a new word, if not outputs the current answerArray
function drawWord(){
    while (guessWord == ''){
        newWord ()
    }
    document.getElementById("currentWord").innerHTML = Arrays.toString(answerArray);
}

// Javascript for Hangman Game Adam Specker

// Calling variables
var words = ["plholdzero","plholdtwo","plholdthree",];
var guessWord = "";
var guesses = [];
var userLives = 9;
var answerArray=[];
var rawArray=[];
var remainingLetters= '';

    

// selecting a random word from words array
function newWord(){

guessWord =words[Math.floor(Math.random() * words.length)];
newAnswer (guessWord);
}
//Fills answerArray with underscores based on word length
function newAnswer (){

for (var i = 0; i <guessWord.length;i++){
    answerArray[i]= " _ ";
}
    var remainingLetters = answerArray.length;
}

// If guessword is empty creates a new word, if not outputs the current answerArray
function drawWord(){
    while (guessWord == ''){
        newWord ();
    }
    var formArray = answerArray.join(" ");
    document.getElementById("currentWord").innerHTML = formArray.toString();
}

//Check if user guess is present, add to answer array, or else subtract a life

function wrongGuess(guess){
    if (!guesses.includes(guess)){
    userLives--;
    if (userLives===0){
        gameLoss();
    } else{
    document.getElementById("livesLeft").innerHTML = ("You have "+ userLives + " lives left.");
    guesses.push(guess);
    document.getElementById("lettersGuessed").innerHTML = guesses;
    }    
    } 
    else {
        alert ("Please pick a letter you have not guessed.");
    }
}

//Resets all the values
function reset (){
        guessWord = '';
        userLives = 10;
        guesses=[];
}

// Triggers on game victory
function gameWin(){
    // document.getElementById("winLoss").innerHTML= ("YOU WIN!");
    alert ("YOU WIN!");
    drawWord();
    // reset();
}

// Triggers on game defeat
function gameLoss(){
    // document.getElementById("winLoss").innerHTML; ("YOU LOSE! MAYBE NEXT TIME.");
    // reset();
    alert ("YOU LOSE MAYBE NEXT TIME!");
    drawWord();
}

//Key up event
document.onkeyup = function(event){
    var guess = event.key;
    userGuess(guess);
}

//User guess function
function userGuess (guess){
    //loop determining if guess is present in the word
    if(answerArray.includes(guess)){
        alert("You have already found this letter.")
    } else {
    if(guessWord.indexOf(guess) > -1)   { 
        //checks where guess is present and replaces it
        for (var j = 0; j < guessWord.length; j++) {
        
            if (guessWord[j] === guess) {
            answerArray[j] = guess;
            drawWord();
            remainingLetters ++;
            console.log(remainingLetters);
            if (remainingLetters==guessWord.length){
                gameWin();
        }
        } 
        } 
        } else {
            wrongGuess(guess);
        }
        
        }
    }


window.onload = function(){

drawWord();

console.log(userLives);

}



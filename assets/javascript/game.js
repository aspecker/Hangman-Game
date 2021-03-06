// Javascript for Hangman Game Adam Specker

// Calling variables
var words = ["pekingese","spaniel","labrador","poodle","terrier","pomeranian","rottweiler","doberman","retriever","bulldog","mastiff", "dachshund", "dalmation", "collie", "greyhound", "whippet"];
// var words = ["placeholdone", "placeholdtwo","placeholdthree"]
var guessWord = "";
var guesses = [];
var userLives = 9;
var answerArray=[];
var rawArray=[];
var remainingLetters= '';
var formArray =[];
var wins=0;
var losses=0;

// If guessword is empty creates a new word, if not outputs the current answerArray
function drawWord(){
    while (guessWord == ''){
        newWord ();
    }
    formArray = answerArray.join(" ");
    document.getElementById("currentWord").innerHTML = formArray.toString();
}

// selecting a random word from words array
function newWord(){
    guessWord =words[Math.floor(Math.random() * words.length)];
    newAnswer(guessWord);
    }

//Fills answerArray with underscores based on word length
function newAnswer (){
    for (var i = 0; i <guessWord.length;i++){
        answerArray.push("_");
    }
    var remainingLetters = answerArray.length;
    }

//Resets all the values
function reset (){
        
        guessWord = '';
        userLives = 9;
        guesses=[];
        remainingLetters ='';
        answerArray = [];
        document.getElementById("lettersGuessed").innerHTML = guesses;
        document.getElementById("livesLeft").innerHTML = ("You have "+ userLives + " lives left.");
        document.getElementById("winLoss").innerHTML = ("Wins: " + wins + " Losses: " + losses);
        drawWord();
        
}

// Triggers on game victory
function gameWin(){
    wins++;
    Materialize.toast("Arf arf! Congratulations on guessing " + guessWord, 4000);
    reset();
    document.getElementById("winPic").src= "./assets/images/smile-dog.jpg";
    
}

// Triggers on game defeat
function gameLoss(){
    losses++;
    Materialize.toast("GRRR! You couldn't guess " + guessWord, 4000);
    reset();
    document.getElementById("winPic").src = "./assets/images/grumpy-dog.jpg";
    
}

//Check if user guess is present or else subtract a life
function wrongGuess(guess){
    if (!guesses.includes(guess)){
    userLives--;
    if (userLives===0){
        gameLoss();
    } else{
    // add to guessed letter array,
    document.getElementById("livesLeft").innerHTML = ("You have "+ userLives + " lives left.");
    guesses.push(guess);
    document.getElementById("lettersGuessed").innerHTML = guesses.join("     ");
    }    
    } 
    else {
        Materialize.toast("Please pick a letter you have not guessed.", 2500);
    }
}

//User guess function
function userGuess (guess){
    //Check to see if user has already guessed that letter
    if(answerArray.includes(guess)){
        Materialize.toast("You have already found this letter.", 2500);

    } else {
        //conditional determining if guess is present in the word
    if(guessWord.indexOf(guess) > -1)   { 
        //if present checks where guess is present and replaces it, draws new word, and adds to win counter
    for (var j = 0; j < guessWord.length; j++) {
        
        if (guessWord[j] === guess) {
            answerArray[j] = guess;
            drawWord();
            remainingLetters ++;
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

//Key up event
document.onkeyup = function(event){
    var guess = event.key;
    userGuess(guess);
}

window.onload = function(){
reset();
drawWord();

}



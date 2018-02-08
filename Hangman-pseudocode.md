# TO DOS for Hangman Project
* STYLING

# DONES
* needs to not register registers input of non letter characters 
* reset function needed to trigger on win and loss
* reset function needs to actually do something
* After resetting to a new guessWord, retains characters longer than new word length




# Hangman Pseudocode

### Variables needed
* words - array of all the words to choose
* guessWord - word randomly chosen from words array
* userLives - tracks how many guesses the user has made incorrectly
* userGuess - records the keypress of the user then places it in the word or in the wrong guesses

### Functions needed
* Array of strings containing the list of words to be guessed 

* Function to randomize the word chosen from the list of words

* Keep track of user guesses and restart the game when guesses get to zero

* Display series of blanks for each character in the word to be guessed
    * detect that the user has correctly guessed a letter
    * Insert letters in place of blanks when correctly guessed
    

* When a letter is guessed, display it in the guessed letters section

### Psuedocode

Pick a random word from an array

Draw the random word as underscores

While the word has not been guessed{
    show the player their progress
    allow them to guess again
}

const Hangman = function(word, remainingGuess) {
    this.word = word.toLowerCase().split("");
    this.guessedLetters = [];
    this.remainingGuess = remainingGuess;
    this.status = "playing"; // three status = {playing, finished, failed}
}

Hangman.prototype.updateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
    if(this.remainingGuess === 0) {
        this.status = "failed";
    } else if(finished) {
        this.status = "finished";
    }

}

Hangman.prototype.getStatusMsg = function () {
    const status = this.status;
    let msg;
    if(status === "playing") {
        msg = `Guesses left: ${this.remainingGuess}`;
    } else if (status === "finished") {
        msg = `Great work! You have guessed the word!`;
    } else if (status === "failed") {
        msg = `Nice try! The word was ${this.word.join("")}`; 
    } else {
        msg = "Invalid status";
    }

    return msg;
}

Hangman.prototype.getPuzzle = function() {
    let remainingWords = [];
    this.word.forEach((letter) => {
        this.guessedLetters.includes(letter) ? remainingWords.push(letter) : remainingWords.push("*");
    });
    return remainingWords.join("");
}

Hangman.prototype.getRemainingGuess = function() {
    return `Remaining guess = ${this.remainingGuess}`;
}

Hangman.prototype.guessLetter = function(letter) {
    try {
        if (this.status !== "playing") {
            throw Error("Please restart the game");
        }

        if(letter.length > 1) {
            throw Error("You can only guess one letter at a time!");
        }

        if(this.remainingGuess === 0) {
            throw Error("No more guess remaining!");
        }

        if(this.guessedLetters.includes(letter)) {
            console.log(`You have guessed ${letter} before`);
        } else {
            // If the guess is unique and wrong
            if(!this.word.includes(letter)) {
                this.remainingGuess -= 1;
                this.getRemainingGuess();
            }
            this.guessedLetters.push(letter);
        }
        this.updateStatus();
    } catch (e) {
        console.log(e.message);
    }
}
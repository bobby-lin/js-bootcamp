const game = new Hangman("applebee", 3);

renderGameDisplay(game);

window.addEventListener("keypress", (e) => {
    game.guessLetter(e.key);
    renderGameDisplay(game);
})
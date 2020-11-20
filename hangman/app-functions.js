let renderGameDisplay = (game) => {
    document.querySelector("#puzzle-text").textContent = game.puzzle;
    document.querySelector("#game-status").textContent = game.statusMessage;
}
let renderGameDisplay = (game) => {
    document.querySelector("#puzzle-text").textContent = game.getPuzzle();
    document.querySelector("#game-status").textContent = game.getStatusMsg();
}
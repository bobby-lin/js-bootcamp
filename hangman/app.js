let game;

const startGame = async () => {
    const puzzle = await getPuzzlePromise("2");
    game = new Hangman(puzzle, 5);
    renderGameDisplay(game);
};

startGame();

document.querySelector("#reset").addEventListener("click", (e) => {
    startGame();
})

window.addEventListener("keypress", (e) => {
    game.guessLetter(e.key);
    renderGameDisplay(game);
})

// getPuzzlePromise("2").then((puzzle) => {
//     console.log(`Puzzle: ${puzzle}`);
// }).catch((err) => {
//     console.log(err);
// })

// const getCountryName = (countryCode) => {   
//     getCountryCodePromise(countryCode).then((country) => {
//         console.log(country);
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// getCurrentCountry().then((countryName) => {
//     console.log(`Country: ${countryName}`);
// }).catch((error) => {
//     console.log(`Error: ${error}`);
// })
let getPuzzle = (wordCount, callback) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4) {
            if(e.target.status === 200) {
                const puzzleJSON = JSON.parse(e.target.response);
                console.log(puzzleJSON);
                // We are using callback function instead of return because we need to wait for request to be ready
                callback(undefined, puzzleJSON.puzzle);
            } else {
                callback("Error encountered when getting puzzle from source!", undefined);
            }
        }
    })

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
}

// Calling the API asynchronously with the callback function.
const getCountryCode = (countryCode, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (e) => {
        if(e.target.readyState === 4 ) {
            if(e.target.status === 200) {
                const countryJSON = JSON.parse(e.target.response);
                
                const country = countryJSON.find((country) => country.alpha2Code === countryCode);
                callback(undefined, country.name);
            } else {
                callback("Error encountered......", undefined);
            }
        }
    })

    request.open("GET", "https://restcountries.eu/rest/v2/all")
    request.send()
}
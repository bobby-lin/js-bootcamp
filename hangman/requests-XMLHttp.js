let getPuzzlePromise = (wordCount) => new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4) {
            if(e.target.status === 200) {
                const puzzleJSON = JSON.parse(e.target.response);
                console.log(puzzleJSON);
                // If the request is successful, we use resolve
                resolve(puzzleJSON.puzzle);
            } else {
                // If the request is not working, we use reject
                reject("Error encountered when getting puzzle from source!");
            }
        }
    })

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
});

const getCountryCodePromise = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) => {
        if(e.target.readyState === 4 ) {
            if(e.target.status === 200) {
                const countryJSON = JSON.parse(e.target.response);
                
                const country = countryJSON.find((country) => country.alpha2Code === countryCode);
                resolve(country.name);
            } else {
                reject("Error encountered......");
            }
        }
    })

    request.open("GET", "https://restcountries.eu/rest/v2/all")
    request.send()
});
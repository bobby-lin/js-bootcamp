const getPuzzlePromise = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw Error("Response status code is not 200");
        }
    }).then((data) => {
        return data.puzzle;
    })
}

const getCountryCodePromise = (countryCode) => {
    return fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw Error("CC - Response status is not 200")
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode);
        return country.name;
    })
}

const getLocation = () => {
    return fetch(`http://ipinfo.io/json?token=12341`).then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw Error("Ipinfo - Respone status is not 200");
        }
    }).then((data) => {
        return data;
    })
}
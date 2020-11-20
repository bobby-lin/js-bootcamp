// Refactor to async / await
const getPuzzlePromise = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle
    } else {
        throw Error("Response status code is not 200");
    }
}

// const getCountryCodePromise = async (countryCode) => {
//     const response = await fetch(`https://restcountries.eu/rest/v2/all`);
//     if (response.status === 200) {
//         const data = await response.json();
//         const country = data.find((country) => country.alpha2Code === countryCode);
//         return country.name;
//     } else {
//         throw Error("CC - Response status is not 200")
//     }
// }

// const getLocation = async () => {
//     const response = await fetch(`http://ipinfo.io/json?token=${token}`);
//     if(response.status === 200) {
//         const data = await response.json();
//         console.log(`${data.city} ${data.region} ${data.country}`);
//         return data;
//     } else {
//         throw Error("Ipinfo - Respone status is not 200");
//     }
// }

// const getCurrentCountry = async () => {
//     const location = await getLocation();
//     const countryCode = location.country;
//     const countryName = await getCountryCodePromise(countryCode);
//     return countryName;
// }
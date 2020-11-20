// Unchained Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 4) : reject("Not a number");
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err)
})

// Chained Promise with catch error handling
getDataPromise('10').then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
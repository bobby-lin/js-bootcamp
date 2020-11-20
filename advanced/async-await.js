const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 4) : reject("Not a number");
    }, 2000)
})

const getProcessData = async () => {
    let data = await getDataPromise(2);
    data = await getDataPromise(2);
    return data;
}

getProcessData().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

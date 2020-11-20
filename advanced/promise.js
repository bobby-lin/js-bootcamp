// Callback function example

const getCallbackData = (num, callback) => {
    setTimeout(() => {
        callback(undefined, num * 2);
    }, 2000);
};

// Callback Hell Example
// Notice the repeated lines of code?
getCallbackData(2, (error, data) => {
    if(error) {
        console.log(error);
    } else {
        getCallbackData(data, (error, data) => {
            if(error) {
                console.log(error);
            } else {
                console.log(data)
            }
        });
    }
})

// Create a new promise

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // Either reject or resolve will be executed first.
        if (data.length > 0) {
            resolve(data);
        } else {
            reject("The data is invalid");
        }

        // These reject or resolve will be IGNORED
        reject("Promise error");
        resolve("This is promise data"); 
    }, 2000)
})

const promise = getDataPromise("");

promise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err) // this is to handle the promise error.
})
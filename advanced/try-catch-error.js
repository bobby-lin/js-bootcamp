const getInterest = (sum) => {
    if(typeof sum !== "number") {
        throw error("The sum must be a number");
    }
    return sum * 0.25;
}

try {
    console.log(getInterest("abc"))
} catch (e) {
    console.log('Argument must be number');
}

try {
    throw new Error("Hello");
} catch (e) {
    console.log(e.message);
}
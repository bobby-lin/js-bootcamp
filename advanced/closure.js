const createCounter = () => {
    let count = 0;

    // Only allow these functions to be used by others
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    }
}

// Create the counter
const counter = createCounter();
console.log(counter.count); // This is undefined because count is not allowed to be accessed directly
counter.increment();
counter.increment();
counter.count = 111; // This will have no change to the count value
console.log(counter.get()); // This method get is allowed

const getTipper = (tip = 0.15) => {
    return (amount) => tip * amount; // This is the returning function to be used. tip is defined by the creation of getTipper
}

const tipper = getTipper();
console.log(tipper(100));

const tipper50pct = getTipper(0.5); // This returns a function which contains tip * amount
console.log(tipper50pct(100));

const tipper0pct = getTipper(0);
console.log(tipper0pct(100));
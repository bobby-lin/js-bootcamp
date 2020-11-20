class Destination {
    constructor() {
        this.locations = []
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value.trim();
        this.locations.push(value.trim());
    }
}

const destination = new Destination();
destination.location = "Singapore    "; // Setting the value
destination.location = "    London"; // Setting the value
destination.location = "   New York"; // Setting the value
console.log(destination.locations); // Getting the value
let restaurant = {
    name:'ABC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let remainingSeats = this.guestCapacity - this.guestCount;
        return partySize <= remainingSeats;
    },
    seatParty: function(size) {
        this.guestCount = this.guestCount + size;
    },
    removeParty: function(size) {
        this.guestCount = this.guestCount - size;
    }
}

restaurant.seatParty(73)
console.log(restaurant.checkAvailability(4));

restaurant.removeParty(30)
console.log(restaurant.checkAvailability(4));
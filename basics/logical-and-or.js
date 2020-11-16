let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Offer only vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Offer one vegan dishes");
} else {
    console.log("Offer non-vegan dishes");
}
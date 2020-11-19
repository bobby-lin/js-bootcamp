const date1 = new Date("January 2000");
console.log(date1);

const date2 = new Date("January 1 2018");
console.log(date2);

// Unix epoch time January 1st 1970 00:00:00
const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();
console.log(`${timestamp1} | ${timestamp2}`);

if(timestamp1 > timestamp2) {
    console.log(`${date2.toString()}`);
} else {
    console.log(`${date1.toString()}`);
}
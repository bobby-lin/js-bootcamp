// Value which will return false if they are provided in a condition:
// undefined, null, 0, empty string, false, NaN

const getBoolVal = (val) => val ? "True" : "False";

const variableUndefined = undefined;
const emptyString = "";
const nullVar = null;
const zeroInt = 0;

console.log(getBoolVal(variableUndefined));
console.log(getBoolVal(emptyString));
console.log(getBoolVal(nullVar));
console.log(getBoolVal(zeroInt));
console.log(getBoolVal("Hello"));
console.log(getBoolVal({})); // object will return true
const group = ['Dad', 'Mum', 'Kiddo', 'Son', 'Daughter']
const group2 = ['Grandpa', 'Grandma', 'Dad', 'Mum', 'Kiddo', 'Son', 'Daughter'];

const showWelcomeMsg = () => "Welcome to the amusement park";
const showErrorMsg = (g) => `Your group size (${g.length}) is over social distancing size! Not allowed to enter!`;
const checkGroupSize = (g) => g.length <= 5 ? showWelcomeMsg() : showErrorMsg(g);

console.log(checkGroupSize(group));
console.log(checkGroupSize(group2));
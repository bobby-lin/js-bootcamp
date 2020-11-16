let myAcc = {
    name: 'John Tan',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
}

let addIncome = function(account, amount) {
    account.income = account.income + amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Balance for ${account.name} is ${balance}: Income=${account.income}, Expense=${account.expenses}`;
}

addExpense(myAcc, 100);
addIncome(myAcc, 1000);
addExpense(myAcc, 99);
addIncome(myAcc, 500);
console.log(getAccountSummary(myAcc));
resetAccount(myAcc);
console.log(getAccountSummary(myAcc));
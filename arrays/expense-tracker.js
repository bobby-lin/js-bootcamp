const account = {
    name: "John Lee",
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({description: description, amount: amount});
    },
    addIncome: function(description, amount) {
        this.income.push({description: description, amount: amount});
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        this.expenses.forEach(function(item) {
            totalExpenses += item.amount;
        })

        let totalIncome = 0;
        this.income.forEach(function(item) {
            totalIncome += item.amount;
        })

        let balance = totalIncome - totalExpenses;

        return `${this.name} account has a balance ${balance} - Income (${totalIncome}) and Expenses (${totalExpenses})`;
    }
}

account.addExpense("Buy Coffee", 20);
account.addExpense("Buy Bread", 5);
account.addIncome("Job", 1000)
console.log(account.getAccountSummary())

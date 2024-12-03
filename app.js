function analyze() {
    const income = parseFloat(document.getElementById("incomeTotal").innerHTML.replace(/[^0-9.]/g, ""));
    const expense = parseFloat(document.getElementById("expenseTotal").innerHTML.replace(/[^0-9.]/g, ""));
    const resultElement = document.getElementById("result");

    if (income <= expense) {
        resultElement.className = "redResult";
        resultElement.innerHTML = "Financial Strategy Needed: Expenses Outweigh Income";
    }else {
        resultElement.className = "greenResult";
        resultElement.innerHTML = "Result : Financially Healthy. Income Exceeds Total Expenses";
    }
}

function addTotalIncome(moneyVal) {
    if (!isNaN(moneyVal)){
        const incomeElement = document.getElementById("incomeTotal");
        let currentIncome = parseFloat(incomeElement.innerHTML.replace(/[^0-9.]/g, ""));
        currentIncome += moneyVal;
        incomeElement.innerHTML = "Income: " + currentIncome.toFixed(2);
    }
}

function addTotalExpense(moneyVal) {
    if (!isNaN(moneyVal)){
        const expenseElement = document.getElementById("expenseTotal");
        let currentExpense = parseFloat(expenseElement.innerHTML.replace(/[^0-9.]/g, ""));
        currentExpense += moneyVal;
        expenseElement.innerHTML = "Expense: " + currentExpense.toFixed(2);
    }
}

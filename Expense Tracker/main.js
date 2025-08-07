const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income-amount");
const expenseEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEl.addEventListener("submit", addTransaction);

function addTransaction(e) {
    e.preventDefault();

    // get form values
    const description = descriptionEl.value().trim();
    const amount = amountEl.value;

    console.log(typeof amount);
}
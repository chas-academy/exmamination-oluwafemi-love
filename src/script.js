//ui
const descriptionUI = document.getElementById("desc");
const budgetAmountUI = document.getElementById("amount");

const incomeBtn = document.getElementById("incomeBtn");
const expensesBtn = document.getElementById("expenseBtn");

const incomeListUL = document.getElementById("incomeList");
const expenseListUL = document.getElementById("expenseList");
const transactionListUL = document.getElementById("transactionList");

const balanceUI = document.getElementById("balance");

//data
let description;
let amount;
let income = [];
let expenses = [];
let transaction = {};

//Action
incomeBtn.addEventListener("click", () => {
  Defend();
  AddIncome();
  ClearUI();
});

expensesBtn.addEventListener("click", () => {
  Defend();
  AddExpenses();
  ClearUI();
});

//Functionalities
function AddIncome() {
  //Retrieve Information
  description = descriptionUI.value.trim();
  amount = budgetAmountUI.value;

  transaction = {
    description: description,
    amount: amount,
    type: "income",
  };

  income.push(transaction);

  console.log("This is the current transaction (income): ", transaction);
  console.log("This is income: ", income);
}

function AddExpenses() {
  //Retrieve Information
  description = descriptionUI.value.trim();
  amount = budgetAmountUI.value;

  transaction = {
    description: description,
    amount: amount,
    type: "expenses",
  };

  expenses.push(transaction);

  console.log("This is the current transaction (expense): ", transaction);
  console.log("This is expenses: ", expenses);
}

//Defend
function Defend() {
  if (!descriptionUI.value || !budgetAmountUI.value) {
    alert("You need to input the needed information");
  }
}

//Clear UI
function ClearUI() {
  descriptionUI.value = "";
  budgetAmountUI.value = "";
}



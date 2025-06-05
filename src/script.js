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
let allTransactions = [];

//Action
incomeBtn.addEventListener("click", () => {
  Defend();
  AddIncome();
  RenderIncome();
  RenderAllTransactions();
  CalculateBalance();
  ClearUI();
});

expensesBtn.addEventListener("click", () => {
  Defend();
  AddExpenses();
  RenderExpenses();
  RenderAllTransactions();
  CalculateBalance();
  ClearUI();
});

//Functionalities
function AddIncome() {
  //Retrieve Information
  description = descriptionUI.value.trim();
  amount = Number(budgetAmountUI.value);

  transaction = {
    description: description,
    amount: amount,
    type: "income",
  };

  income.push(transaction);
  allTransactions.push(transaction);
}

function AddExpenses() {
  //Retrieve Information
  description = descriptionUI.value.trim();
  amount = Number(budgetAmountUI.value);

  transaction = {
    description: description,
    amount: amount,
    type: "expenses",
  };

  expenses.push(transaction);
  allTransactions.push(transaction);
}

//Defend
function Defend() {
  if (!descriptionUI.value || !budgetAmountUI.value) {
    alert("You need to input the needed information");
    return;
  }
}

//Clear UI
function ClearUI() {
  descriptionUI.value = "";
  budgetAmountUI.value = "";
}

function RenderIncome() {
  incomeListUL.textContent = ""; //clear previous list to avoid rendering issues
  for (icm of income) {
    let singleLi = document.createElement("li");
    singleLi.textContent =  `${icm.description} - ${icm.amount} kr (Inkomst)`;
    incomeListUL.appendChild(singleLi);
  }
}

function RenderExpenses() {
  expenseListUL.textContent = "";
  for (exp of expenses) {
    let singleLi = document.createElement("li");
    singleLi.textContent = `${exp.description} - ${exp.amount} kr (Utgift)`;
    expenseListUL.appendChild(singleLi);
  }
}

function RenderAllTransactions() {
  transactionListUL.textContent = "";
  for (allt of allTransactions) {
    let singleLi = document.createElement("li");
    singleLi.textContent = `${allt.description} -  ${allt.amount} kr (${allt.type})`;
    transactionListUL.appendChild(singleLi);
  }
}

function TotalIncome() {
  let totalIncome = 0;
  for (icm of income) {
    totalIncome += icm.amount;
  }
  return totalIncome;
}

function TotalExpenses() {
  let totalExpenses = 0;
  for (xpz of expenses) {
    totalExpenses += xpz.amount;
  }
  return totalExpenses;
}

function CalculateBalance() {
  const incomeTotal = TotalIncome();
  const expenseTotal = TotalExpenses();
  const balance = incomeTotal - expenseTotal;
  balanceUI.textContent = balance;
  console.log(
    `Total Income: ${TotalIncome()}, Total Expenses: ${TotalExpenses()}, Balance: ${balance}`
  );
}

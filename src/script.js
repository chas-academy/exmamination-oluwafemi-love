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
let allTransactions = [];

//Action
incomeBtn.addEventListener("click", () => {
  if (!Defend()) return;
  AddIncome();
  RenderIncome();
  RenderAllTransactions();
  CalculateBalance();
  ClearUI();
});

expensesBtn.addEventListener("click", () => {
  if (Defend()) {
    AddExpenses();
    RenderExpenses();
    RenderAllTransactions();
    CalculateBalance();
    ClearUI();
  }
});

//Functionalities
function AddIncome() {
  //Retrieve Information
  description = descriptionUI.value.trim();
  amount = Number(budgetAmountUI.value);

 const transaction = {
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

 const transaction = {
    description: description,
    amount: amount,
    type: "expenses",
  };

  expenses.push(transaction);
  allTransactions.push(transaction);
}

//Defend
function Defend() {
  const desc = descriptionUI.value.trim();
  const amt = Number(budgetAmountUI.value);
  if (!desc || !amt || amt <= 0) {
    alert("You need to input the needed valid information");
    return false;
  }
  return true;
}

//Clear UI
function ClearUI() {
  descriptionUI.value = "";
  budgetAmountUI.value = "";
}

function RenderIncome() {
  incomeListUL.textContent = ""; //clear previous list to avoid rendering issues
  for (const icm of income) {
    let singleLi = document.createElement("li");
    singleLi.textContent = `${icm.description} - ${icm.amount} kr (Inkomst)`;
    incomeListUL.appendChild(singleLi);
  }
}

function RenderExpenses() {
  expenseListUL.textContent = "";
  for (const exp of expenses) {
    let singleLi = document.createElement("li");
    singleLi.textContent = `${exp.description} - ${exp.amount} kr (Utgift)`;
    expenseListUL.appendChild(singleLi);
  }
}

function RenderAllTransactions() {
  transactionListUL.textContent = "";
  for (const allt of allTransactions) {
    let singleLi = document.createElement("li");
    singleLi.textContent = `${allt.description} -  ${allt.amount} kr (${allt.type})`;
    transactionListUL.appendChild(singleLi);
  }
}

function TotalIncome() {
  let totalIncome = 0;
  for (const icm of income) {
    totalIncome += icm.amount;
  }
  return totalIncome;
}

function TotalExpenses() {
  let totalExpenses = 0;
  for (const xpz of expenses) {
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

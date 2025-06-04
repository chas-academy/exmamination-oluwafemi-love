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
  console.log(`This is invokation of TotalIncome: `, TotalIncome());
  CalculateBalance();
  ClearUI();
});

expensesBtn.addEventListener("click", () => {
  Defend();
  AddExpenses();
  RenderExpenses();
  RenderAllTransactions();
  console.log(`This is the invokation of TotalExpenses: `, TotalExpenses());

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

  console.log("This is the current transaction (income): ", transaction);
  console.log("This is income: ", income);
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

function RenderIncome() {
  incomeListUL.innerHTML = ""; //clear previous list to avoid rendering issues
  for (icm of income) {
    let singleLi = document.createElement("li");
    singleLi.innerHTML = `${icm.description}:  ${icm.amount}kr`;
    incomeListUL.appendChild(singleLi);
  }
}

function RenderExpenses() {
  expenseListUL.innerHTML = "";
  for (exp of expenses) {
    let singleLi = document.createElement("li");
    singleLi.innerHTML = `${exp.description}:  ${exp.amount}kr`;
    expenseListUL.appendChild(singleLi);
  }
}

function RenderAllTransactions() {
  transactionListUL.innerHTML = "";
  for (allt of allTransactions) {
    let singleLi = document.createElement("li");
    singleLi.innerHTML = `${allt.description}:  ${allt.amount}kr, Type: ${allt.type}`;
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
  balanceUI.innerHTML = balance;
  console.log(
    `Total Income: ${TotalIncome()}, Total Expenses: ${TotalExpenses()}, Balance: ${balance}`
  );
}

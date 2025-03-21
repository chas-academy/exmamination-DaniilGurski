// Elements
const descriptionField = document.querySelector("#desc");
const amountField = document.querySelector("#amount");
const incomeBtn = document.querySelector("#incomeBtn");
const expenseBtn = document.querySelector("#expenseBtn");
const incomeListElement = document.querySelector("#incomeList");
const expenseListElement = document.querySelector("#expenseList");
const transactionListElement = document.querySelector("#transactionList");
const balanceElement = document.querySelector("#balance");
const incomeList = [];
const expenseList = [];
const transactionList = [];
let balance = 0;

function emptyInputFields() {
  amountField.value = "";
  descriptionField.value = "";
}

function addTransaction(description, amount, type) {
  transactionList.push({ description, amount, type });

  // Update HTML transaction list
  transactionListElement.innerHTML = "";
  transactionList.forEach((transaction) => {
    const transactionItem = document.createElement("li");
    transactionItem.innerText = `${transaction.description} - ${transaction.amount} kr (${transaction.type})`;
    transactionListElement.append(transactionItem);
  });
}

// Handle income button click
incomeBtn.addEventListener("click", () => {
  const amount = Number(amountField.value);
  const description = descriptionField.value;

  if (amount === "" || description === "") {
    return;
  }

  emptyInputFields();

  // Update income list and balance
  incomeList.push(amount);
  balance += amount;
  balanceElement.innerText = balance;

  // Update HTML income list
  incomeListElement.innerHTML = "";
  incomeList.forEach((income) => {
    const incomeItem = document.createElement("li");
    incomeItem.innerText = `${description} - ${income} kr (Inkomst)`;
    incomeListElement.append(incomeItem);
  });

  addTransaction(description, amount, "Inkomst");
});

// Handle expense button click
expenseBtn.addEventListener("click", () => {
  const amount = Number(amountField.value);
  const description = descriptionField.value;

  if (amount === "" || description === "") {
    return;
  }

  emptyInputFields();

  // Update income list and balance
  expenseList.push(amount);
  balance -= amount;
  balanceElement.innerHTML = balance;

  // Update HTML expense list
  expenseListElement.innerHTML = "";
  expenseList.forEach((expense) => {
    const expenseItem = document.createElement("li");
    expenseItem.innerText = `${description} - ${expense} kr (Utgift)`;
    expenseListElement.append(expenseItem);
  });

  addTransaction(description, amount, "Utgift");
});

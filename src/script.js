// Elements
const descriptionField = document.querySelector("#desc");
const amountField = document.querySelector("#amount");
const incomeBtn = document.querySelector("#incomeBtn");
const expenseBtn = document.querySelector("#expenseBtn");
const incomeListElement = document.querySelector("#incomeList");
const expenseListElement = document.querySelector("#expenseList");
const balanceElement = document.querySelector("#balance");
const incomeList = [];
const expenseList = [];
let balance = 0;

function emptyInputFields() {
  amountField.value = "";
  descriptionField.value = "";
}

// Handle income button click
incomeBtn.addEventListener("click", () => {
  const amount = Number(amountField.value);
  const description = descriptionField.value;

  if (amount === 0 || description === "") {
    return;
  }

  emptyInputFields();

  // Update income list and balance
  incomeList.push({ description, amount });
  balance += amount;
  balanceElement.innerHTML = balance;

  // Update HTML income list
  incomeListElement.innerHTML = "";
  incomeList.forEach((income) => {
    const incomeItem = document.createElement("li");
    incomeItem.textContent = `${income.description} - ${income.amount} kr (Inkomst)`;
    incomeListElement.append(incomeItem);
  });
});

// Handle expense button click
expenseBtn.addEventListener("click", () => {
  const amount = Number(amountField.value);
  const description = descriptionField.value;

  console.log(amount);

  if (amount === 0 || description === "") {
    return;
  }

  emptyInputFields();

  // Update expense list and balance
  expenseList.push({ description, amount });
  balance -= amount;
  balanceElement.innerHTML = balance;

  // Update HTML expense list
  expenseListElement.innerHTML = "";
  expenseList.forEach((expense) => {
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${expense.description} - ${expense.amount} kr (Utgift)`;
    expenseListElement.append(expenseItem);
  });
});

let storedNumber = "";
let firstNumber = "";
let currentOperation = null;
let result = "";

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      if (num2 === 0) return null;
      else return divide(num1, num2);
    default:
      return null;
  }
}

// add basic
function add(x, y) {
  return x + y;
}
//console.log(add(0, 0));

// subtract basic
function subtract(x, y) {
  return x - y;
}
// console.log(subtract(0, 0));

// multiply basic
function multiply(x, y) {
  return x * y;
}
// console.log(multiply(0, 0));

// divide basic
function divide(x, y) {
  return x / y;
}
// console.log(divide(0, 0));

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll(".operation");
const equalsbutton = document.getElementById("equalsBtn");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// AC function All Clear button
allClearButton.addEventListener("click", clearDisplay);
function clearDisplay() {
  currentOperandTextElement.textContent = "";
  previousOperandTextElement.textContent = "";
  firstNumber = "";
  storedNumber = "";
  currentOperation = null;
}

// delete Button doesnt currently work!
deleteButton.addEventListener("click", deleteNumber);
function deleteNumber() {
  currentOperandTextElement.textContent = currentOperandTextElement.textContent
    .toString()
    .slice(0, -1);
}

// display numbers on calculator screen
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    //inputs the first number
    storedNumber += button.value;

    currentOperandTextElement.textContent = storedNumber;
  });
});

// display operations in calculator screen
operationButtons.forEach((operation) => {
  operation.addEventListener("click", function () {
    console.log(operation.textContent);
    if (currentOperation !== null) evaluate();

    //stores the first number to the firstNumber variable when the operator is inputted
    firstNumber = storedNumber;

    //inputs the operation and stores it to currentOperation variable
    currentOperation = operation.textContent;

    // sets the previous display to the stored number and the operation inputted
    previousOperandTextElement.textcontent = storedNumber + currentOperation;

    // clears teh stored number ready for the second number to be inputted
    storedNumber = "";
    console.log(`your current operation is ${currentOperation}`);
    console.log(`store number = ${storedNumber} first number = ${firstNumber}`);
  });
});

equalsbutton.addEventListener("click", evaluate);

function evaluate() {
  // when equals key is clicked call operate() function
  result = operate(
    parseFloat(firstNumber),
    parseFloat(storedNumber),
    currentOperation
  );
  currentOperandTextElement.textContent = Math.round(result * 1000) / 1000;
  console.log(result);
}

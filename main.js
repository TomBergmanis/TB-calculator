// add basic
function add(x, y) {
  return x + y;
}
console.log(add(0, 0));

// subtract basic
function subtract(x, y) {
  return x - y;
}
console.log(subtract(0, 0));

// multiply basic
function multiply(x, y) {
  return x * y;
}
console.log(multiply(0, 0));

// divide basic
function divide(x, y) {
  return x / y;
}
console.log(divide(0, 0));

// operator buttons]

let x = "";
let y = "";
const addOperator = "+";
const subtractOperator = "-";
const multiplyOperator = "*";
const divideOperator = "/";

function operate(operator, x, y) {
  x = Number(x);
  y = Number(y);
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      if (y === 0) return null;
      else return divide(x, y);
    default:
      return null;
  }
}
console.log(operate(1, 5));

document.addEventListener("DOMContentLoaded", function () {
  const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
  );
  const currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
  );

  let currentOperand = "";
  let previousOperand = "";
  let operation = undefined;

  const numberButtons = document.querySelectorAll("[data-numbers]");
  const operationButtons = document.querySelectorAll("[data-operation]");
  const equalsButton = document.querySelector("[data-equals]");
  const deleteButton = document.querySelector("[data-delete]");
  const allClearButton = document.querySelector("[data-all-clear]");

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      appendNumber(button.innerText);
      updateDisplay();
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      chooseOperation(button.innerText);
      updateDisplay();
    });
  });

  equalsButton.addEventListener("click", () => {
    compute();
    updateDisplay();
  });

  allClearButton.addEventListener("click", () => {
    clear();
    updateDisplay();
  });

  deleteButton.addEventListener("click", () => {
    deleteLast();
    updateDisplay();
  });

  function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand += number;
  }

  function chooseOperation(op) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
  }

  function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = "";
  }

  function clear() {
    currentOperand = "";
    previousOperand = "";
    operation = undefined;
  }

  function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
  }

  function updateDisplay() {
    currentOperandTextElement.innerText = currentOperand;
    if (operation != null) {
      previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
    } else {
      previousOperandTextElement.innerText = "";
    }
  }
});

const numberBtns = document.querySelectorAll('.number-button');
const operatorBtns = document.querySelectorAll('.operator');
const display = document.querySelector('.calculator-display');
const equalBtn = document.querySelector('.equal-sign');
const allClearBtn = document.querySelector('.all-clear');
const decimalBtn = document.querySelector('.decimal');

let firstOperand = null;
let secondOperand = null;
let operator = null;

function operate(n, m, operator) {
  switch (operator) {
    case '+':
      return +n + +m;
    case '-':
      return n - m;
    case '*':
      return n * m;
    case '/':
      return n / m;
    default:
      return;
  }
}

function clearDisplay() {
  display.value = '';
}

numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    display.value === '0' ? display.value = btn.value : display.value += btn.value;
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if(!firstOperand) {
      firstOperand = display.value;
    } else {
      secondOperand = display.value;
      firstOperand = operate(firstOperand, secondOperand, operator);
      secondOperand = null;
      operator = null;
    }
    operator = btn.value;
    clearDisplay();
  });
});

equalBtn.addEventListener('click', () => {
  if(operator) {
    if(!secondOperand) {
      secondOperand = display.value;
    }
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(operator);
    display.value = operate(firstOperand, secondOperand, operator);
    firstOperand = null;
    secondOperand = null;
  }
});

allClearBtn.addEventListener('click', clearDisplay);
decimalBtn.addEventListener('click', (e) => {
  if(display.value !== '' && !display.value.includes('.')) display.value += e.target.value;
});
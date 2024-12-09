let currentInput = '0';
let previousInput = '';
let operator = '';
const MAX_INPUT_LENGTH = 17;

function updateDisplay() {
  document.querySelector('.android-display').textContent = currentInput;
}

function appendClear() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput.length < MAX_INPUT_LENGTH) {
    if (currentInput === '0') {
      currentInput = number.toString();
    } else {
      currentInput += number.toString();
    }
    updateDisplay();
  }
}

function appendOperator(op) {
  if (previousInput === '') {
    previousInput = currentInput; 
    currentInput = '0';          
    operator = op;                
  } else {

    operator = op;
    currentInput = previousInput + ' ' + operator + ' ';  
  }
  updateDisplay();
}
function appendDot() {

  if (!currentInput.includes('.') && currentInput.length < MAX_INPUT_LENGTH) {
    currentInput += '.';
  }
  updateDisplay();
}

function calculateResult() {
  if (previousInput === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;

    case '-':
      result = prev - current;
      break;

    case '/':
      if (current === 0) {
        alert('Error! Division by zero.');
        result = '0';
      } else {
        result = prev / current;
      }
      break;

    case '*':
      result = prev * current;
      break;

    case '%':
      result = (prev * current) / 100;
      break;

    default:
      return;
  }

  currentInput = result.toString().slice(0, MAX_INPUT_LENGTH);
  previousInput = '';
  operator = '';
  updateDisplay();
}

function toggleSign() {
  if (currentInput.startsWith('-')) {
    currentInput = currentInput.substring(1);
  } else {
    currentInput = '-' + currentInput;
  }
  updateDisplay();
}

function appendPercentage() {
  if (currentInput !== '0') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}

function remove() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';  
  }
  updateDisplay();
}




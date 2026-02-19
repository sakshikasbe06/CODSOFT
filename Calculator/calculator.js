let currentNumber = '';
let previousNumber = '';
let operator = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;

    currentNumber += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentNumber === '') return;

    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;

    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(curr)) return;

    if (operator === '+')
        result = prev + curr;

    else if (operator === '-')
        result = prev - curr;

    else if (operator === '*')
        result = prev * curr;

    else if (operator === '/') {
        if (curr === 0) {
            alert("Cannot divide by zero");
            clearDisplay();
            return;
        }
        result = prev / curr;
    }

    currentNumber = result.toString();
    operator = null;
    previousNumber = '';

    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateDisplay();
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.value = currentNumber || '0';
}

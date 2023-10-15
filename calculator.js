const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let firstOperand = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clear();
        } else if (button.id === 'equals') {
            calculate();
        } else if (button.classList.contains('operator')) {
            handleOperator(button.id);
        } else {
            appendNumber(button.innerText);
        }
    });
});

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function clear() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

function handleOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        currentInput = '';
        operator = op;
    } else {
        calculate();
        operator = op;
    }
}

function calculate() {
    if (operator === null || currentInput === '') return;

    const secondOperand = parseFloat(currentInput);
    switch (operator) {
        case 'add':
            currentInput = (firstOperand + secondOperand).toString();
            break;
        case 'subtract':
            currentInput = (firstOperand - secondOperand).toString();
            break;
        case 'multiply':
            currentInput = (firstOperand * secondOperand).toString();
            break;
        case 'divide':
            currentInput = (firstOperand / secondOperand).toString();
            break;
        default:
            return;
    }

    firstOperand = parseFloat(currentInput);
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}
// Get the display element
const display = document.getElementById('display');

// Variables to store input values and operators
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to handle button clicks
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.id;

        if (value === 'clear') {
            clearDisplay();
        } else if (value === 'equals') {
            calculate();
        } else if (value === 'sqrt') {
            squareRoot();
        } else if (value === 'percent') {
            percentCalc();
        } else if (value === 'add' || value === 'subtract' || value === 'multiply' || value === 'divide') {
            setOperator(value);
        } else if (value === 'decimal') {
            addDecimal();
        } else {
            appendNumber(value);
        }
    });
});

// Append number to display
function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay();
    }
}

// Update the display value
function updateDisplay() {
    display.value = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Set the operator
function setOperator(op) {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = op;
    }
}

// Add decimal point
function addDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Calculate the result based on the operator
function calculate() {
    let result = 0;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operator) {
        case 'add':
            result = previous + current;
            break;
        case 'subtract':
            result = previous - current;
            break;
        case 'multiply':
            result = previous * current;
            break;
        case 'divide':
            if (current === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = previous / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    updateDisplay();
}

// Calculate square root
function squareRoot() {
    if (currentInput !== '') {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

// Percentage calculation
function percentCalc() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d/.test(key)) {
        appendNumber(key);
    } else if (key === '.') {
        addDecimal();
    } else if (key === '+') {
        setOperator('add');
    } else if (key === '-') {
        setOperator('subtract');
    } else if (key === '*') {
        setOperator('multiply');
    } else if (key === '/') {
        setOperator('divide');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});


// Display Expression

const keyPads = document.getElementsByClassName('key-pad');
for (const keypad of keyPads) {
    keypad.addEventListener('click', function (event) {
        const inputField = document.getElementById('input-field');
        inputField.value = inputField.value + event.target.innerText;
    })
}

// Clear Input field

document.getElementById('ac-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    inputField.value = "";
})

//Percentage Calculation

document.getElementById('percentage').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const getPercentage = parseFloat(inputField.value);
    const showPercentage = getPercentage / 100;
    inputField.value = showPercentage;
})

// slice inputs one by one

document.getElementById('remove').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    inputField.value = inputField.value.slice(0, -1);
})
//function
function expressionCal(operator, sumInitialValue, iterationStartPoint) {
    const inputField = document.getElementById('input-field');

    let splitedNumbersText = inputField.value.split(operator);
    console.log(splitedNumbersText)
    const getNumbers = [];

    for (const splitedNumberText of splitedNumbersText) {
        let splitedNumber = parseFloat(splitedNumberText);
        getNumbers.push(splitedNumber);
    }
    let sum = sumInitialValue;
    let i = iterationStartPoint;
    if (operator == '+') {
        for (length = getNumbers.length; i < length; i++) {
            sum = sum + getNumbers[i];
        }
    }
    else if (operator == '*') {
        for (length = getNumbers.length; i < length; i++) {
            sum = sum * getNumbers[i];
        }
    }
    inputField.value = sum;
}

// Calculation for Addition, Substraction, Division and Multipication

document.getElementById('equal-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    if (inputField.value.includes('+')) {
        expressionCal('+', 0, 0)
    }
    else if (inputField.value.includes('*')) {
        expressionCal('*', 1, 0)
    }
    else if (inputField.value.includes('-')) {
        let splitedNumbersText = inputField.value.split('-');
        const getNumbers = [];
        for (const splitedNumberText of splitedNumbersText) {
            let splitedNumber = parseFloat(splitedNumberText);
            getNumbers.push(splitedNumber);
        }
        let sum = getNumbers[0]
        for (var i = 1, length = getNumbers.length; i < length; i++) {
            sum = sum - getNumbers[i];
        }
        inputField.value = sum;
    }
    else if (inputField.value.includes('/')) {
        let splitedNumbersText = inputField.value.split('/');
        const getNumbers = [];
        for (const splitedNumberText of splitedNumbersText) {
            let splitedNumber = parseFloat(splitedNumberText);
            getNumbers.push(splitedNumber);
        }
        let sum = getNumbers[0]
        for (var i = 1, length = getNumbers.length; i < length; i++) {
            sum = sum / getNumbers[i];
        }
        inputField.value = sum;
    }
})
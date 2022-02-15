
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

// Calculation for Addition, Substraction, Division and Multipication

document.getElementById('equal-button').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    if (inputField.value.includes('+')) {
        let splitedNumbersText = inputField.value.split('+');
        console.log(splitedNumbersText)
        const getNumbers = [];
        let sum = 0;
        for (const splitedNumberText of splitedNumbersText) {
            let splitedNumber = parseFloat(splitedNumberText);
            getNumbers.push(splitedNumber);
        }
        for (const getNumber of getNumbers) {
            sum = sum + getNumber;
        }
        inputField.value = sum;
    }
    else if (inputField.value.includes('*')) {
        let splitedNumbersText = inputField.value.split('*');
        console.log(splitedNumbersText)
        const getNumbers = [];
        let sum = 1;
        for (const splitedNumberText of splitedNumbersText) {
            let splitedNumber = parseFloat(splitedNumberText);
            getNumbers.push(splitedNumber);
        }
        for (const getNumber of getNumbers) {
            sum = sum * getNumber;
        }
        inputField.value = sum;
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

//Please Ignore it //
/* const buttons = document.getElementsByClassName('handler');

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const getClicked = event.target.innerText;
        const inputField = document.getElementById('input-field');
        inputField.value = inputField.value + getClicked;
        // let getNumber = parseInt(inputField.value);
        // console.log(getNumber);
        if (getClicked == "+") {
            let getNumber = parseInt(getClicked);
            console.log(getNumber)
        }


if (getNumber == 1 || getNumber == 2 || getNumber == 3 || getNumber == 4 | getNumber == 5 || getNumber == 6 || getNumber == 7 || getNumber == 8 || getNumber == 9) {

}
const totalNumber = parseFloat(inputField.value);
// console.log(getNumber)
if (getNumber == "+") {
    let sum = 0;
    sum = sum + totalNumber;
    console.log(totalNumber + totalNumber);
}


    })
}
function subtraction(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        var total = arr[0];
        if (typeof (total) !== 'number') {
            return false;
        }
        for (var i = 1, length = arr.length; i < length; i++) {
            if (typeof (arr[i]) === 'number') {
                total -= arr[i];
            }
            else
                return false;
        }
        return total;
    }
    else
        return false;
} */
const outputContainer = document.querySelector('#output-container')
let previousVal = 0
let firstOperation = true;
let newNumberInput = true;
let lastOperation = ""

function add() {
    let result = arguments[0]
    Array.from(arguments).slice(1).forEach(num => {
        result += num
    })
    return(result)
}

function subtract() {
    let result = arguments[0]
    Array.from(arguments).slice(1).forEach(num => {
        result -= num
    })
    return(result)
}

function multiply() {
    let result = arguments[0]
    Array.from(arguments).slice(1).forEach(num => {
        result *= num
    })
    return(result)
}

function divide() {
    let result = arguments[0]
    Array.from(arguments).slice(1).forEach(num => {
        result /= num
    })
    return(result)
}

// function operate(func, ...nums) {
//     return func(...nums);
// }

// console.log(operate(multiply, 1, 2, 3, 4, 5))

function operate(operator, ...nums) {
    console.log(...nums)
    switch (operator) {
        case 'add':
            return add(...nums)
        case 'subtract':
            return subtract(...nums)
        case 'multiply':
            return multiply(...nums)
        case 'divide':
            return divide(...nums)
    }
}

//console.log(operate('*', 1,2,3,4,5))

function addDigitButtonFunc(e) {
    if (newNumberInput) {
        outputContainer.textContent = e.target.id;
        newNumberInput = false
    }
    else {
        outputContainer.textContent += e.target.id; 
    }
        
}

function addOperationButtonFunc(e) {
    onOperationButtonPress(e)
    if (firstOperation === true) {
        updatePreviousVal()
        firstOperation = false
    }
    else {
        updateResult()
        updatePreviousVal()
    }
    newNumberInput = true;
}

function onOperationButtonPress(e) {
    console.log(previousVal + " " + outputContainer.textContent)
    lastOperation = e.target.id
}

function onResultButtonPress(e) {
    updateResult()
    firstOperation = true;
    newNumberInput = true;
    previousVal = 0;
}

function updateResult() {
    outputContainer.textContent = operate(lastOperation, +previousVal, +outputContainer.textContent)
}

function updatePreviousVal() {
    previousVal = +outputContainer.textContent
}


const digitButtons = document.querySelectorAll('.digit')
digitButtons.forEach(digit=>{
    digit.addEventListener('click', addDigitButtonFunc)
})

const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', e => {
    firstOperation = true
    outputContainer.textContent = ""
})

const operationButtons = document.querySelectorAll('.operation')
operationButtons.forEach(operation => {
    operation.addEventListener('click', addOperationButtonFunc)
})

const resultButton = document.querySelector('#result')
resultButton.addEventListener('click', updateResult)

function add() {
    let result = 0
    Array.from(arguments).forEach(num => {
        result += num
    })

    return(result)
}

function subtract() {
    let result = 0
    Array.from(arguments).forEach(num => {
        result -= num
    })

    return(result)
}

function multiply() {
    let result = 1
    Array.from(arguments).forEach(num => {
        result *= num
    })

    return(result)
}

function divide() {
    let result = 1
    Array.from(arguments).forEach(num => {
        result /= num
    })

    return(result)
}

function operate(func, ...nums) {
    return func(...nums);
}

console.log(operate(multiply, 1, 2, 3, 4, 5))

// function operate(operator, ...nums) {
//     switch (operator) {
//         case '+':
//             return add(...nums)
            
//         case '-':
//             return subtract(...nums)
            
//         case '*':
//             return multiply(...nums)
            
//         case '/':
//             return divide(...nums)
            
//     }
// }

// console.log(operate('*', 1,2,3,4,5))

function addDigitButtonFunc(e) {
    const outputContainer = document.querySelector('#output-container')
    outputContainer.textContent += e.target.id;
}

const digitButtons = document.querySelectorAll('.digit')
digitButtons.forEach(digit=>{
    digit.addEventListener('click', addDigitButtonFunc)
})

const buttonsContainer = document.getElementById("buttons")

const input = document.getElementById("input")

let firstNumberInput
let secondNumberInput
let operation

const clearInput = () => {
    input.textContent = ""
}

const inputNotEmpty = () => {
    return input.textContent != ""

}

const negate = () => {
    if (input.textContent[0] != "-") {
        input.textContent = "-" + input.textContent
    }
    else {
        input.textContent = input.textContent.slice(1)
    }
}

const getInputAsNumber = () => {
    if (input.textContent.includes('.'))
        return parseFloat(input.textContent)
    else
        return parseInt(input.textContent)
}

const clearNumbersAndOperations = () => {
    firstNumberInput = undefined
    secondNumberInput = undefined
    operation = ''
}

const doMath = (operation, firstNumberInput, secondNumberInput) => {
    console.log(firstNumberInput)
    console.log(operation)
    console.log(secondNumberInput)
    switch (operation) {
        case '%':
            return firstNumberInput % secondNumberInput
        case '*':
            return firstNumberInput * secondNumberInput
        case '/':
            return firstNumberInput / secondNumberInput
        case '+':
            return firstNumberInput + secondNumberInput
        case '-':
            return firstNumberInput - secondNumberInput
    }
}

const handleOperator = (operator) => {
    if (inputNotEmpty) {
        if (firstNumberInput == undefined) {
            operation = operator
            firstNumberInput = getInputAsNumber()
        }
        else {
            operation = operator
            firstNumberInput = doMath(operator, firstNumberInput, getInputAsNumber())
        }
    }
    clearInput()
}

const handleOtherPressed = (target) => {
    switch (target.id) {
        case "A/C":
            clearInput()
            clearNumbersAndOperations()
            break
        case "negate":
            if (inputNotEmpty())
                negate()
            break
        case "equals":
            if (inputNotEmpty()) {
                secondNumberInput = getInputAsNumber()
                clearInput()

                input.textContent = doMath(
                    operation, firstNumberInput, secondNumberInput)

                clearNumbersAndOperations()
            }
            break
        case "modu":
            handleOperator("%")
            break
        case "divide":
            handleOperator('/')
            break
        case "multiply":
            handleOperator('*')
            break
        case "plus":
            handleOperator('+')
            break
        case "subtract":
            handleOperator('-')
            break
    }
}

const handleNumberPressed = (target) => {
    input.textContent += target.textContent
}


buttonsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains("number")) {
        handleNumberPressed(event.target)
    }
    else {
        handleOtherPressed(event.target)
    }
})

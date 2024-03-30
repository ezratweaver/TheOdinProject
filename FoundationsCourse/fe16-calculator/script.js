const buttonsContainer = document.getElementById("buttons")

const input = document.getElementById("input")

let firstNumberInput
let secondNumberInput
let operation

const clearInput = () => {
    input.textContent = ""
}

const ifInputNotEmpty = (func) => {
    if (input.textContent != "") {
        func()
    }
}

const negate = () => {
    if (input.textContent[0] != "-") {
        input.textContent = "-" + input.textContent 
    }
    else {
        input.textContent = input.textContent.slice(1)
    }
}

const handleOperatorPressed = (id) => {
    switch (id) {
        case "A/C":
            clearInput()
            break
        case "negate":
            ifInputNotEmpty(negate)
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
        handleOperatorPressed(event.target.id)
    }
})

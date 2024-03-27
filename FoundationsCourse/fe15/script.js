const canvasSize = 832

let userGridAmount = 16

let canvas = []

let parents = []

const resetButton = document.getElementById("reset")


function getDivSize(userGridAmount) {
    return Math.round(canvasSize / userGridAmount)
}

function genCanvas(userGridAmount) {

    let divSize = getDivSize(userGridAmount)

    let dimension = getDivSize(divSize)

    for (let i=1; i <= dimension; ++i) {

        let parentDiv = document.createElement("div")

        parentDiv.id = i

        parentDiv.classList.toggle("parent")

        parents.push(parentDiv)

        let row = []
        
        for (let x=1; x <= dimension; ++x) {

            let div = document.createElement("div") 

            div.id = `${i}-${x}`

            div.style.minHeight = `${divSize}px`
            div.style.minWidth = `${divSize}px`

            div.style.border = "1px solid black"

            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "red"
            })

            parentDiv.appendChild(div)

            row.push(div)
        }

        canvas.push(row)

        document.body.appendChild(parentDiv)
    }

}

function clearCanvas() {
    for (const parent of parents) {
        document.body.removeChild(parent)
    }

}

function resetButtonPressed() {
    clearCanvas()
    let userInput = prompt("Please enter grid dimension e.g. 16 would be 16x16")
    genCanvas(Number.parseInt(userInput))
}

genCanvas(16)

resetButton.addEventListener("click", resetButtonPressed)

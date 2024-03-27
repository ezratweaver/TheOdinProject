const canvasSize = 832

let userGridAmount = 16

let canvas = []

let parents = []

function getDivSize(userGridAmount) {
    return Math.round(canvasSize / userGridAmount)
}

function genCanvas(userGridAmount) {

    let divSize = getDivSize(userGridAmount)

    for (let i=0; i <= 16; ++i) {

        let parentDiv = document.createElement("div")

        parentDiv.id = i

        parentDiv.classList.toggle("parent")

        parents.push(parentDiv)

        let row = []
        
        for (let x=0; x <= 16; ++x) {

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

genCanvas(16)
clearCanvas()

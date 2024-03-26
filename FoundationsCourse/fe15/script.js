const canvasSize = 832

let parents = []

let canvas = []

for (let i=0; i <= 16; ++i) {

    let parentDiv = document.createElement("div")

    parentDiv.id = i

    parentDiv.classList.toggle("parent")

    parents.push(parentDiv) 

    let row = []
    
    for (let x=0; x <= 16; ++x) {

        let div = document.createElement("div") 

        div.id = `${i}-${x}`

        div.style.minHeight = "52px"
        div.style.minWidth = "52px"

        div.style.border = "1px solid black"

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "red"
        })

        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = "white"
        })


        parentDiv.appendChild(div)

        row.push(div)
    }

    canvas.push(row)

    document.body.appendChild(parentDiv)
}

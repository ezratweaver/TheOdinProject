const ul = document.querySelector("ul")

const input = document.querySelector(".inputdiv input") 

input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        addShoppingItem(input.value)
    }
})

const addButton = document.getElementById("add")

addButton.addEventListener('click', () => {
    addShoppingItem(input.value)
})

function addShoppingItem(itemName) {
    if (itemName == "") {
        return
    }
    const newDiv = document.createElement("div")

    newDiv.style.display = "flex"
    newDiv.style.gap = "15px"
    newDiv.style.alignItems = "center"

    const newItem = document.createElement("li")
    const newDeleteButton = document.createElement("button")

    newDeleteButton.style.marginTop = "4px"
    newDeleteButton.style.minWidth = "60px"
    newDeleteButton.style.maxHeight = "20px"
    newDeleteButton.style.fontSize = "11px"
    newDeleteButton.textContent = "Delete"

    newDeleteButton.addEventListener('click', () => {
        newDiv.remove()
    })

    newItem.textContent = itemName
    newItem.style.fontWeight = 600
    newItem.style.fontSize = "20px"

    newDiv.appendChild(newItem)
    newDiv.appendChild(newDeleteButton)

    ul.appendChild(newDiv)
}

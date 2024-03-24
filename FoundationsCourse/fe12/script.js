const container = document.querySelector("#container")


const redpara = document.createElement("p")

redpara.style.color = "red";

redpara.textContent = "Hey I'm red!"

container.appendChild(redpara)


const blueh3 = document.createElement("h3")

blueh3.style.color = "blue";

blueh3.textContent = "I'm a blue h3!"


const bdiv = document.createElement("div")

bdiv.classList.add("bdiv")

bdiv.style.border = "1px solid black"
bdiv.style.background = "pink"

container.appendChild(bdiv)

const selDiv = document.querySelector(".bdiv")

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div!"
const p = document.createElement("p")
p.textContent = "ME TOO!"

selDiv.appendChild(h1)
selDiv.appendChild(p)

const ACTIONS = ["Rock", "Paper", "Scissors"];

let info = document.getElementById("info")
let computerPlays = document.getElementById("computerplays")
let resultdiv = document.getElementById("result")

let rockButton = document.getElementById("rock")
let paperButton = document.getElementById("paper")
let scissorsButton = document.getElementById("scissors")

const sleep = ms => new Promise(r => setTimeout(r, ms));

function findWinner(userPlay, computerPlay) {
    if (userPlay == computerPlay)
        return "Tie";
    if ((userPlay == "Rock" && computerPlay == "Scissors") ||
        (userPlay == "Paper" && computerPlay == "Rock") || 
        (userPlay == "Scissors" && computerPlay == "Paper"))
        return "Win";
    else
        return "Loss";
}

function cleanupPlay() {
    info.textContent = "Your turn!"
    computerPlays.textContent = ""
    resultdiv.textContent = ""
}

async function handleResult(userPlay, computerPlay) {
    let result = findWinner(userPlay, computerPlay)

    info.textContent = "You played: " + userPlay            
    await sleep(500)
    computerPlays.textContent = "Computer played: " + computerPlay
    await sleep(500)
    resultdiv.textContent = "Result is: " + result

    await sleep(1500)
    cleanupPlay()
}

function getComputerSelection() {
    return ACTIONS[Math.floor(Math.random() * (3 - 0) + 0)];
}



rockButton.addEventListener("click", async () => {
    await handleResult("Rock", getComputerSelection())
})

paperButton.addEventListener("click", async () => {
    await handleResult("Paper", getComputerSelection())
})

scissorsButton.addEventListener("click", async () => {
    await handleResult("Scissors", getComputerSelection())
})

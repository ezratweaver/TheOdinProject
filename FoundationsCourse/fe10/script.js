let actions = ["Rock", "Paper", "Scissors"];

function findWinner(player, computer) {
    if (player == computer)
        return "Tie";
    if ((player == "Rock" && computer == "Scissors") ||
        (player == "Paper" && computer == "Rock") || 
        (player == "Scissors" && computer == "Paper"))
        return "Win";
    else
        return "Loss";
}

function getComputerSelection() {
    return actions[Math.floor(Math.random() * (3 - 0) + 0)];
}

function getPlayerSelection() {
    return actions[parseInt(prompt("1: Rock, 2: Paper, 3: Scissors")) - 1] ?? "Rock";
}

function play() {
    let playerPlay = getPlayerSelection();
    let computerPlay = getComputerSelection();
    let gameResult = findWinner(playerPlay, computerPlay);
    
    console.log("You played: " + playerPlay)
    console.log("Computer Played: " + computerPlay)

    if (gameResult == "Win")
        console.log("%cGame Result: " + gameResult, "color:lightgreen;font-weight:800;")
    else if (gameResult == "Loss")
        console.log("%cGame Result: " + gameResult, "color:red;font-weight:800;")
    else
        console.log("Game Result: " + gameResult)
}

play();


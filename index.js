let rockButton = document.querySelector(".rock-button")
let paperButton = document.querySelector(".paper-button")
let scissorButton = document.querySelector(".scissor-button")
let playerImage = document.querySelector(".player-image")
let dialogBox = document.querySelector(".choose-weapon-text")
let computerImage = document.querySelector(".computer-image")
let MatchWon = document.querySelector("#Won-container")


rockButton.addEventListener("click", () => {
    const userChoice = "rock"
    const computerChoice = randomChoice();
    const winner = compare(computerChoice, userChoice);
    computerImage.src = `./images/${computerChoice}.jpeg`;
    playerImage.src = `./images/${userChoice}.jpeg`;
    MatchWon.textContent = `${ winner }`;
    dialogBox.style.display = "none"
})

paperButton.addEventListener("click", () => {
    const userChoice = "paper"
    const computerChoice = randomChoice();
    const winner = compare(computerChoice, userChoice);
    computerImage.src = `./images/${ computerChoice }.jpeg`;
    playerImage.src = `./images/${ userChoice }.jpeg`;
    MatchWon.textContent = `${ winner }`;
    dialogBox.style.display = "none"
})

scissorButton.addEventListener("click", () => {
    const userChoice = "scissor"
    const computerChoice = randomChoice();
    const winner = compare(computerChoice, userChoice);
    computerImage.src = `./images/${computerChoice}.jpeg`;
    playerImage.src = `./images/${userChoice}.jpeg`;
    MatchWon.textContent = `${ winner }`;
    dialogBox.style.display = "none"
})
// ------------------------computer choice random-----------------

function randomChoice(){
    let imageArr = ["rock", "paper", "scissor"]
    let randomChoice = Math.floor(Math.random() * imageArr.length);
    return imageArr[randomChoice]
}

function compare(computerChoice, playerChoice){
    if (playerChoice === computerChoice) {
        return "Tie! Nobody wins :"
    
    } else if (playerChoice === "rock" && computerChoice === "paper"
        || playerChoice === "scissor" && computerChoice === "rock"
        || playerChoice === "paper" && computerChoice === "scissor"
    ) {
        return "Computer Wins!"
    
    
    } else if (playerChoice === "rock" && computerChoice === "scissor"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissor" && computerChoice === "paper") {
            
        return "User Wins!"
    }
}



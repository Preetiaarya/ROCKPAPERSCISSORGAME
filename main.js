// Create an array containing the choices - rock, paper and scissor
// let choices = ["rock", "paper", "scissor"]

// // Generate a random number between 0 to 2
// let randomNum = Math.floor(Math.random() * 3)
// //console.log(randomNum)



// // Take input from the user and store it in a variable called userChoice
// let userChoice = prompt("choose rock paper scissor")
// //console.log(userChoice)



// /* Generate a random choice for the computer from the array of choices.
// Store it in a variable called computerChoice*/
// //let computerChoice = choices[Math.floor(Math.random() * choices.length)]
// //console.log(computerChoice)
// let computerChoice;
// if (userChoice === "rock") {
//     computerChoice = "paper"
// }
// else if (userChoice === "paper") {
//     computerChoice = "scissor"
// }
// else {
//     (userChoice === "paper")
//     computerChoice = "rock"
// }



// /*Compare the userChoice and computerChoice to check who wins.
// Use if-else statements*/
// if (userChoice === computerChoice) {
//     alert("Tie" + " - " + "your choise" + userChoice + " " + "computer choice" + computerChoice)
//     //}else if(userChoice.rock === computerChoice.rock) {
//     // alert("MATCH TIE" + " " + "your choise" + userChoice + " " + "computer choice" + computerChoice)
//     //}else if(userChoice.paper === computerChoice.paper) {
//     // alert("MATCH TIE" + " " + "your choise" + userChoice + " " + "computer choice" + computerChoice)
//     //}else if(userChoice.scissor === computerChoice.scissor) {
//     //alert("MATCH TIE" + " " + "your choise" + userChoice + " " + "computer choice" + computerChoice)
// } else if (userChoice === "rock" && computerChoice === "paper"
//     || userChoice === "scissor" && computerChoice === "rock"
//     || userChoice === "paper" && computerChoice === "scissor"
// ) {
//     alert("Computer win!.." + "" + "your choise -: " + userChoice + " & " + "computer choice -: " + computerChoice)
// } else if (userChoice === "rock" && computerChoice === "scissor"
//     || userChoice === "paper" && computerChoice === "rock"
//     || userChoice === "scissor" && computerChoice === "paper") {
//     alert("User win!.." + "" + "your choise -: " + userChoice + " & " + "computer choice -: " + computerChoice)
// } else {
//     alert("Entered wrong input")
// }



let rockButton = document.querySelector(".rock-button")
let paperButton = document.querySelector(".paper-button")
let scissorButton = document.querySelector(".scissor-button")
let playerImage = document.querySelector(".player-image")
let dialogBox = document.querySelector(".choose-weapon-text")
let computerImage = document.querySelector(".computer-image")
let MatchWon = document.querySelector(".Won-container")

let imageArr = ["images/rock.jpeg", "images/paper.jpeg", "images/secissor.jpeg"]


rockButton.addEventListener("click", () => {
    playerImage.src = "images/rock.jpeg"
    dialogBox.style.display = "none"
    let random = Math.floor(Math.random() * imageArr.length)
    computerImage.src = imageArr[random]
    const winner = compare(computerChoice, userChoice);
    message.textContent = `${ winner }`;

})

paperButton.addEventListener("click", () => {
    playerImage.src = "images/paper.jpeg"
    dialogBox.style.display = "none"
    let random = Math.floor(Math.random() * imageArr.length)
    computerImage.src = imageArr[random]
    const winner = compare(computerChoice, userChoice);
    message.textContent = `${ winner }`;
})

scissorButton.addEventListener("click", () => {
    playerImage.src = "images/secissor.jpeg"
    dialogBox.style.display = "none"
    let random = Math.floor(Math.random() * imageArr.length)
    computerImage.src = imageArr[random]
    const winner = compare(computerChoice, userChoice);
    message.textContent = `${ winner }`;
})


if (playerImage === computerImage) {
    Woncontainer("Tie" + " - " + "you choose" + playerImage + " " + "computer choose" + computerImage)

} else if (playerImage === "rock" && computerImage === "paper"
    || playerImage === "scissor" && computerImage === "rock"
    || playerImage === "paper" && computerImage === "scissor"
) {
    Won-container("Computer win!.." + "" + "you choose -: " + playerImage + " & " + "computer choose -: " + computerImage)


} else if (playerImage === "rock" && computerImage === "scissor"
    || playerImage === "paper" && computerImage === "rock"
    || playerImage === "scissor" && computerImage === "paper") {
        Won-container("User win!.." + "" + "you choose -: " + playerImage + " & " + "computer choose -: " + computerImage)
}







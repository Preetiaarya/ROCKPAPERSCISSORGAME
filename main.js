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

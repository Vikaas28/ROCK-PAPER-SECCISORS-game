let usercount = 0;
let compcount = 0;

const choices = document.querySelectorAll(".image");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");
const resetButton = document.querySelector("#reset-button");

// Function to generate computer's choice
const comchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
};

// Add click event listeners to each choice
choices.forEach((image) => {
    image.addEventListener("click", () => {
        const userchoice = image.getAttribute("id");
        console.log("User choice:", userchoice);
        playgame(userchoice);
    });
});
resetButton.addEventListener("click", () => {
    usercount = 0;
    compcount = 0;
    playerScore.textContent = `Player Score: ${usercount}`;
    computerScore.textContent = `Computer Score: ${compcount}`;
    msg.textContent = "Play your move";
    msg.style.backgroundColor = "#333";
});

// Function to determine the winner and update the game state
const playgame = (userchoice) => {
    const computerchoice = comchoice();
    console.log(`User choice: ${userchoice}, Computer choice: ${computerchoice}`);

    if (userchoice === computerchoice) {
        // It's a tie
        msg.textContent = "It's a tie!";
        msg.style.backgroundColor = "#333"; // Dark gray for tie
    } else if (
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissors" && computerchoice === "paper")
    ) {
        // User wins
        usercount++;
        playerScore.textContent = `Player Score: ${usercount}`;
        msg.textContent = `You win! ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // Computer wins
        compcount++;
        computerScore.textContent = `Computer Score: ${compcount}`;
        msg.textContent = `You lose! ${computerchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
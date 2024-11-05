const playButton = document.querySelector('.start');
const playerChoices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
let choices = ["stone", "paper", "scissor"];

// Function to reset the game
const resetGame = () => {
    // Enable all choice buttons and reset message
    playerChoices.forEach(button => button.disabled = false);
    msg.innerText = "Let's Play The Game Vs Computer";
};

// Function to handle the game logic
const PlayGame = () => {
    playButton.addEventListener('click', () => {
        // Hide the play button and start the game
        playButton.classList.add('hide');
        resetGame();

        // Computer randomly selects a choice
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log("Computer's choice:", computerChoice);

        // Set up event listeners for each choice button
        playerChoices.forEach(button => {
            button.addEventListener('click', (event) => {
                // Disable choices after selection
                playerChoices.forEach(btn => btn.disabled = true);
                
                // Get player's choice based on the image's alt attribute
                let playerChoice = event.target.alt;
                console.log("Player's choice:", playerChoice);

                // Determine the game result
                if ((playerChoice === "stone" && computerChoice === "scissor") ||
                    (playerChoice === "paper" && computerChoice === "stone") ||
                    (playerChoice === "scissor" && computerChoice === "paper")) {
                    msg.innerText = `Player won ! Computer chose ${computerChoice}`;
                } else if (playerChoice === computerChoice) {
                    msg.innerText = `It's a tie! Both chose  ${playerChoice}`;
                } else {
                    msg.innerText = `Player lost! Player chose ${playerChoice} & Computer chose ${computerChoice}, Better Luck Next Time `;
                }

                // Show the Play button again to start a new game
                playButton.classList.remove('hide');
            }, { once: true }); // Ensures each button is clickable only once per round
        });
    });
};

// Initialize the game
PlayGame();

let attempts = 0;
let maxAttempts = 10;
let randomNumber;

function startGame() {
    // Generate a new random number and reset attempts
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    
    // Clear the feedback message
    document.getElementById("feedback").textContent = "";

    // Enable the input and button
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("submitGuess").disabled = false;
}

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const guess = parseInt(guessInput.value);

    // Basic input validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        feedback.textContent = `🎉 Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        endGame();
    } else if (attempts >= maxAttempts) {
        feedback.textContent = `Game Over! The number was ${randomNumber}.`;
        endGame();
    } else if (guess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
    } else {
        feedback.textContent = "Too high! Try again.";
    }
}

function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("submitGuess").disabled = true;
    // You could add a 'Play Again' button here
}

// Start the game when the page loads
window.onload = startGame;

// Listen for a click on the submit button
document.getElementById("submitGuess").addEventListener("click", checkGuess);

// Optional: Listen for the 'Enter' key press in the input field
document.getElementById("guessInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
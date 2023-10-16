// Generate a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize points and chances
let points = 0;
let chances = 5;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);

  if (userGuess === targetNumber) {
    showMessage("Congratulations! You guessed the correct number.");
    points += 1;
    resetGame();
  } else if (userGuess > targetNumber) {
    showMessage("Try a lower number.");
  } else {
    showMessage("Try a higher number.");
  }

  chances -= 1;
  updateChances(); // Update chances remaining
  if (chances === 0) {
    showMessage(`Out of chances! The correct number was ${targetNumber}. You scored ${points} points.`);
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  chances = 5;
  document.getElementById("guess").value = '';
  showMessage("");
  updateChances(); // Reset chances display
}

// Function to display a message
function showMessage(message) {
  document.getElementById("message").textContent = message;
  document.getElementById("points").textContent = `Points: ${points}`;
}

// Function to update chances remaining
function updateChances() {
  document.getElementById("chances").textContent = `Chances Remaining: ${chances}`;
}






// ... (previous code)

// Function to provide a hint for the correct number
function getHint() {
  showMessage(`Hint: The correct number is between ${targetNumber - 10} and ${targetNumber + 10}`);
}

// ... (rest of the previous code)
// ... (previous code)




// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);

  if (userGuess >= 1 && userGuess <= 99) {
    if (userGuess === targetNumber) {
      showMessage("Congratulations! You guessed the correct number.");
      points += 1;
      resetGame();
    } else if (userGuess > targetNumber) {
      showMessage("Try a lower number.");
    } else {
      showMessage("Try a higher number.");
    }
    chances -= 1;
    updateChances();
    if (chances === 0) {
      showMessage(`Out of chances! The correct number was ${targetNumber}. You scored ${points} points.`);
      resetGame();
    }
    hideErrorMessage(); // Hide any previous error message
  } else {
    showErrorMessage("Error: Enter a number between 1 and 99.");
  }
}

// Function to display an error message
function showErrorMessage(message) {
  document.getElementById("error-message").textContent = message;
}

// Function to hide the error message
function hideErrorMessage() {
  document.getElementById("error-message").textContent = "";
}


// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);

  if (userGuess >= 1 && userGuess <= 99) {
    if (userGuess === targetNumber) {
      showMessage("Congratulations! You guessed the correct number.");
      points += 1;
      resetGame();
    } else if (userGuess > targetNumber) {
      showMessage("Try a lower number.");
    } else {
      showMessage("Try a higher number.");
    }
    chances -= 1;
    updateChances();
    if (chances === 0) {
      showMessage(`Out of chances! The correct number was ${targetNumber}. You scored ${points} points.`);
      resetGame();
    }
    hideErrorMessage();
  } else {
    showErrorMessage("Error: Enter a number between 1 and 99.");
  }

  updateSubmitButton(); // Update the "Submit Guess" button
}



function checkGuess() {
  // ... (previous code)

  if (userGuess === targetNumber) {
    showMessage("Congratulations! You guessed the correct number.");
    points += 1;
    resetGame();
    playClapAnimation(); // Play the clap animation
  } else {
    // ... (previous code)
  }
}

// Function to play the clap animation
function playClapAnimation() {
  const clapAnimation = document.getElementById("clap-animation");
  clapAnimation.style.display = "block";
  setTimeout(() => {
    clapAnimation.style.display = "none";
  }, 1000); // Adjust the time to match your animation duration (1s in this example)
        }



// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);

  if (userGuess >= 1 && userGuess <= 99) {
    if (userGuess === targetNumber) {
      showMessage("Congratulations! You guessed the correct number.");
      points += 1;
      resetGame();
      document.getElementById("submit-button").classList.add("clap");
    } else if (userGuess > targetNumber) {
      showMessage("Try a lower number.");
    } else {
      showMessage("Try a higher number.");
    }
    chances -= 1;
    updateChances();
    if (chances === 0) {
      if (chances === 0) {
        showMessage(`Out of chances! The correct number was ${targetNumber}. You scored ${points} points.`);
        document.getElementById("guess").setAttribute("disabled", "disabled"); // Disable further guessing
        document.getElementById("submit-button").disabled = true; // Disable the button
        document.getElementById("submit-button").classList.remove("clap"); // Remove the clap animation
        revealCorrectNumber(); // Reveal the correct number
      }
    }
    hideErrorMessage();
  } else {
    showErrorMessage("Error: Enter a number between 1 and 99.");
  }

  updateSubmitButton();
}

// Function to reveal the correct number
function revealCorrectNumber() {
  document.getElementById("message").textContent = `The correct number was ${targetNumber}.`;
    }


// Function to check the user's guess
function checkGuess() {
  const userGuess = document.getElementById("guess").value;
  
  if (userGuess === "2003") {
    // Developer code "2003" entered
    activateDeveloperMode();
  } else {
    const numericGuess = parseInt(userGuess);

    if (numericGuess >= 1 && numericGuess <= 99) {
      if (numericGuess === targetNumber) {
        showMessage("Congratulations! You guessed the correct number.");
        points += 1;
        resetGame();
      } else if (numericGuess > targetNumber) {
        showMessage("Try a lower number.");
      } else {
        showMessage("Try a higher number.");
      }
      chances -= 1;
      updateChances();
      if (chances === 0) {
        showMessage(`Out of chances! The correct number was ${targetNumber}. You scored ${points} points.`);
        resetGame();
      }
      hideErrorMessage();
    } else {
      showErrorMessage("Error: Enter a number between 1 and 99.");
    }

    updateSubmitButton();
  }
}

// Function to activate developer mode
function activateDeveloperMode() {
  localStorage.setItem("developerMode", "true"); // Set a flag in local storage
  showMessage(`Developer Mode Activated. The correct number is ${targetNumber}.`);
}

// Check if developer mode is active on page load
window.addEventListener("load", function() {
  if (localStorage.getItem("developerMode") === "true") {
    showMessage(`Developer Mode Activated. The correct number is ${targetNumber}.`);
  }
});




// Function to check the user's guess
function checkGuess() {
  const userGuess = document.getElementById("guess").value;
  
  if (userGuess === "2003") {
    // Developer code "2003" entered
    activateDeveloperMode();
  } else if (userGuess === "1125") {
    // Deactivate developer mode if "1125" is entered
    deactivateDeveloperMode();
  } else {
    const numericGuess = parseInt(userGuess);

    if (numericGuess >= 1 && numericGuess <= 99) {
      if (numericGuess === targetNumber) {
        showMessage("Congratulations! You guessed the correct number.");
        points += 1;
        resetGame();
      } else if (numericGuess > targetNumber) {
        showMessage("Try a lower number.");
      } else {
        showMessage("Try a higher number.");
      }
      chances -= 1;
      updateChances();
      if (chances === 0) {
        showMessage(`Out of chances! The correct number was ${targetNumber}. You scored ${points} points.`);
        resetGame();
      }
      hideErrorMessage();
    } else {
      showErrorMessage("Error: Enter a number between 1 and 99.");
    }

    updateSubmitButton();
  }
}

// Function to activate developer mode
function activateDeveloperMode() {
  localStorage.setItem("developerMode", "true"); // Set a flag in local storage
  showMessage(`Developer Mode Activated. The correct number is ${targetNumber}.`);
}

// Function to deactivate developer mode
function deactivateDeveloperMode() {
  localStorage.setItem("developerMode", "false"); // Set the flag to false
  showMessage("Developer Mode Deactivated.");
          }
          
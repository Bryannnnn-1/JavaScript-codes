//Bruuuhhh!

//I'm tired        :(


let attempt = 10;
const min = 1;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

function main() {
    let input = document.getElementById("userInput").value;
    if (isNaN(input)) {
        document.getElementById("warning1").textContent = "Invalid Input! Please enter a number.";

        setTimeout(() => {
            document.getElementById("warning1").textContent = "";
        }, 2000);
        return;
    }
    else {
        if (input > randomNum) {
            document.getElementById("message").textContent = "Guess is too High!";
            attempt --;
            document.getElementById("attempLabel").textContent = attempt;

            if (attempt == 0) {
                document.getElementById("warning2").textContent = "~~~You have used up all your attempt!~~~";
                document.getElementById("attempLabel").textContent = "Game Over";
                document.getElementById("message").textContent = "Game Over";
                document.getElementById("userInput").disabled = true;
                document.getElementById("submitBtn").disabled = true;
                setTimeout(() => {
                document.location.reload();
            }, 3000);
            }
                
        }
        else if (input < randomNum) {
            document.getElementById("message").textContent = "Guess is too Low!";
            attempt --;
            document.getElementById("attempLabel").textContent = attempt;

            if (attempt == 0) {
                document.getElementById("warning2").textContent = "~~~You have used up all your attempt!~~~";
                document.getElementById("attempLabel").textContent = "Game Over";
                document.getElementById("message").textContent = "Game Over";
                document.getElementById("userInput").disabled = true;
                document.getElementById("submitBtn").disabled = true;
                setTimeout(() => {
                document.location.reload();
            }, 3000);
            }
            
        }
        else {
            document.getElementById("message").textContent = "Yess, You guessed the number correctly!";
            document.getElementById("userInput").disabled = true;
            document.getElementById("submitBtn").disabled = true;
            setTimeout(() => {
                document.location.reload();
            }, 3000);
        }
    }
}


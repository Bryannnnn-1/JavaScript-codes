let userCheck1 = document.getElementById("bestOf3");
let userCheck2 = document.getElementById("bestOf5");
let userCheck3 = document.getElementById("bestOf7");
let userChoice = 0;
let choices = ["Rock", "Paper", "Scissors"];





function StartCheck() {
    if (userCheck1.checked) {
        userChoice = 3;
        window.location.href = `Game.html`;
    }
    else if (userCheck2.checked) {
        userChoice = 5;
        window.location.href = `Game.html`;
    }
    else if (userCheck3.checked) {
        userChoice = 7;
        window.location.href = `Game.html`;
    }
    else {
        document.getElementById("errorMessage").textContent = "Please select a valid option!";
        return;
    }
    document.getElementById("errorMessage").textContent = "";
}

function mainGame() {

}
function main() {
    const max = 6;
    const min = 1;
    let diceNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const diceImage = document.getElementById("diceImage");
    diceImage.innerHTML = `<img src="pictures/${diceNum}.png" alt="Dice ${diceNum}">>` ;
    console.log("You rolled: " + diceNum);

    const img = diceImage.querySelector("img");
    img.classList.remove("roll");
    void img.offsetWidth;
    img.classList.add("roll");
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("rollButton");
    button.addEventListener("click", main);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            main();
        }
    });

});



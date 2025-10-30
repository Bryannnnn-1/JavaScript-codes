let count = 0;

function increaseCounter() {
    count++;
    document.getElementById("number").textContent = count;
}

function decreaseCounter() {
    count--;
    document.getElementById("number").textContent = count;
}

function reset() {
    count = 0;
    document.getElementById("number").textContent = count;
}
const PI = 3.142;

let username = window.prompt("What is username: ");
document.getElementById("changeName").textContent = "Welcome, " + username

function areaCal() {
    let radius = document.getElementById("myInput").value;
    radius = Number(radius)
    let area = PI * (radius ** 2);
    return area;
}

function displayResult(area) {
    document.getElementById("output").textContent = ("The Area is " + area + "cm");
}


function main() {
    let area = areaCal();
    displayResult(area);
}
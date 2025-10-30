let upperCheckbox = document.getElementById("uppercase");
let lowerCheckbox = document.getElementById("lowercase");
let numberCheckbox = document.getElementById("numbers");
let symbolCheckbox = document.getElementById("symbols");


function main() {
    if (!upperCheckbox.checked && !lowerCheckbox.checked && !numberCheckbox.checked && !symbolCheckbox.checked) {
        document.getElementById("error-message").textContent = "⚠️Select at least one character type!";
        setTimeout(() => {
            document.getElementById("error-message").textContent = "";
        }, 3000);
    }
    else if (document.getElementById("length").value < 10) {
        document.getElementById("error-message").textContent = "⚠️For a stronger password, choose a password length from 10!";
        setTimeout(() => {
            document.getElementById("error-message").textContent = "";
        }, 3000);
    }
    else if (document.getElementById("length").value > 30) {
        document.getElementById("error-message").textContent = "⚠️Password length limit is 30!";
        setTimeout(() => {
            document.getElementById("error-message").textContent = "";
        }, 3000);
    }
    else {
        generatePassword();
        document.getElementById("error-message").textContent = "";
    }
}


function generatePassword() {
    let passwordLength = document.getElementById("length").value;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    let allChars = "";
    let password = "";

    if (upperCheckbox.checked) {
        allChars += uppercaseChars;
    }
    if (lowerCheckbox.checked) {
        allChars += lowercaseChars;
    }
    if (numberCheckbox.checked) {
        allChars += numberChars;
    }
    if (symbolCheckbox.checked) {
        allChars += specialChars;
    }

    for (let i = 0; i < passwordLength; i++ ) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    console.log(`Generated Password:  ${password}`);
    document.getElementById("result").value = password;
}





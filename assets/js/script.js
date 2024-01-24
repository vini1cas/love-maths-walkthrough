document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame (gameType);
            }
        });
    }
    runGame ("addition");
});
/**
 * main game function function, for when the script is loanded, as well as when the user's answer has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displAdd (num1, num2);
    }
    else {
        alert(`${gameType}`)
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrScore() {

}

function incrWrongAnswer() {

}

function displAdd(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displSubt() {

}

function displMult() {

}

function displDiv() {

}

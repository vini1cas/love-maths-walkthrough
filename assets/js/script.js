document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                calcCorrectAnswer();
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
    let userAnswer = parseInt.document.getElementById('answer').value;
    let calcAnswer = calcCorrectAnswer();

    if (userAnswer === calcAnswer[0]) {
        alert("Congrats! You got the right answer!");
        incrScore();
    } else {
        alert(`Awwwww, shoot... You guessed ${userAnswer}. The correct answer was ${calcAnswer}.`);
        incrWrongAnswer;
    }

    runGame (calcAnswer[1]);
}

function calcCorrectAnswer() {

    let operand1 = parseInt.document.getElementById('operand1').innerText;
    let operand2 = parseInt.document.getElementById('operand2').innerText;
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, 'addition']
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}`;
    }
}

function incrScore() {
    let score = parseInt.document.getElementById('score').textContent;
    document.getElementById('score').textContent = ++score;
}

function incrWrongAnswer() {
    let incorrect = parseInt.document.getElementById('incorrect').textContent;
    document.getElementById('incorrect').textContent = ++incorrect;
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

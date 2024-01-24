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
    document.getElementById('answer').addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })
    
    runGame ("addition");
});
/**
 * main game function function, for when the script is loanded, as well as when the user's answer has been processed
 */
function runGame(gameType) {
    document.getElementById('answer').value = "";
    document.getElementById('answer').focus();

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displAdd (num1, num2);
    }
    else if (gameType === "multiplication") {
        displMult (num1, num2);
    }
    else if (gameType === "subtraction") {
        displSubt(num1, num2);
    }

    else if (gameType === "division") {
        displDiv(num1, num2);
    }
    else {
        alert(`${gameType}`);
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
    } else if (operator === "x") {
        return [operand1 * operand2, 'multiplication']
    } else if (operator === "-") {
        return [operand1 - operand2, 'subtraction'];
    } else if (operator === ":") {
        return [operand1 / operand2, 'division'];
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

    function displSubt(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
        document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displMult(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

    function displDiv(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    if (document.getElementById('operand2').textContent != "0") {
        document.getElementById('operand2').textContent = operand2;
    } else {
        operand2 = 1;
    }
    document.getElementById('operator').textContent = ":";
}

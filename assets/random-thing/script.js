document.getElementById("input").focus();
const runBtn = document.getElementById("run");
const output = document.getElementById("output");
const input = document.getElementById("input");
const triesText = document.getElementById("tries-text");
const triesEl = document.getElementById("tries");
const numbers = "0123456789";
var tries = 0;
var guessing = false;

function findInputRandom() {
    guessing = true;
    const length = input.value.length;
    var randomGuess = "";
    tries++;

    for (var i = 0; i < length; i++) {
        randomGuess += numbers[Math.floor(Math.random() * numbers.length)];
    }
    output.innerText = randomGuess;
    triesEl.innerText = tries
    setTimeout(() => {
        if (randomGuess != input.value) {
            findInputRandom();
        } else {
            input.readOnly = false;
            input.focus();
            guessing = false;
            tries = 0;
        }
    }, 10);
}

runBtn.addEventListener("click", () => {
    if (
        !guessing &&
        input.value > 0 &&
        input.value % 1 === 0
    ) {
        findInputRandom();
        triesText.style.visibility = "visible";
        input.readOnly = true;
    } else {
        runBtn.style.backgroundColor = "#ff0000";
        setTimeout(() => {
            runBtn.style.backgroundColor = "#2196f3";
        }, 500);
    }
});

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        runBtn.click();
    }
});
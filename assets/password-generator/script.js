// SLIDER OUTPUT VALUE
var slider = document.getElementById("slider");
var lenght_output = document.getElementById("length");
// output.innerHTML = slider.value;

slider.addEventListener("input", function() {
    lenght_output.innerText = slider.value;
})

// PASSWORD GENERATOR
const check_upper = document.getElementById("check-upper");
const check_lower = document.getElementById("check-lower");
const check_numbers = document.getElementById("check-numbers");
const check_special = document.getElementById("check-symbols");
const upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
var output = document.getElementById("output");
var pass = "";
var randomSet = "";

function generatePassword() {
    pass = "";
    randomSet = "";
    if (check_upper.checked == true) randomSet += upper_letters;
    if (check_lower.checked == true) randomSet += lower_letters;
    if (check_numbers.checked == true) randomSet += numbers;
    if (check_special.checked == true) randomSet += symbols;

    if (randomSet) {
        for (var i = 0; i < slider.value; i++) {
            const r = randomSet[Math.floor(Math.random() * randomSet.length)];
            pass += r;
        }
    } else {
        pass = "*Check at least one box.";
    }

    output.innerText = pass;
}

document.getElementById("generate-button").addEventListener("click", () => {
    generatePassword();
});

// COPY BUTTON HINT
const copy_btn = document.getElementById("copy-button");
const copy_btn_hint = document.getElementById("hint-hover");
copy_btn.addEventListener("mouseenter", () => {
    copy_btn_hint.style.visibility = "visible";
    copy_btn_hint.style.opacity = "1";
    copy_btn_hint.style.marginTop = "22px";
});
copy_btn.addEventListener("mouseleave", () => {
    copy_btn_hint.style.visibility = "hidden";
    copy_btn_hint.style.opacity = "0";
    copy_btn_hint.style.marginTop = "18px";
});

// COPY BUTTON
copy_btn.addEventListener("click", () => {
    const text = output.innerText;
    if (!text || text == "Password copied to clipboard.") return
    var tempRange = document.createElement("input");
    tempRange.value = text;
    document.body.appendChild(tempRange);
    tempRange.select();
    document.execCommand("copy");
    tempRange.remove();
    output.innerText = "Password copied to clipboard.";
    setTimeout(() => {
        output.innerText = text;
    }, 3000);
});
// SLIDER OUTPUT VALUE
var slider = document.getElementById("slider");
var lenght_output = document.getElementById("length");
// output.innerHTML = slider.value;

slider.addEventListener("input", function () {
    lenght_output.innerText = slider.value;
});

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
    const oldPass = output.innerText;
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
            output.innerText = pass;
        }
    } else {
        pass = "Check at least one box.";
        output.innerText = pass;
        setTimeout(() => {
            pass;
            output.innerText = oldPass;
        }, 1500);
    }
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
var copying = false;
copy_btn.addEventListener("click", () => {
    if (copying) return;
    copying = true;
    const text = output.innerText;
    if (!text || text == "Check at least one box.") return;
    var tempRange = document.createElement("input");
    tempRange.value = text;
    document.body.appendChild(tempRange);
    tempRange.select();
    document.execCommand("copy");
    tempRange.remove();

    copy_btn_hint.style.color = "#000";
    setTimeout(() => {
        copy_btn_hint.style.width = "155px";
        setTimeout(() => {
            copy_btn_hint.style.color = "#fff";
            copy_btn_hint.innerText = "Password Copied to Clipboard";
            setTimeout(() => {
                copy_btn_hint.style.color = "#000";
                setTimeout(() => {
                    setTimeout(() => {
                        copy_btn_hint.style.color = "#fff";
                        setTimeout(() => {
                            copying = false;
                        }, 400);
                    }, 500);
                    copy_btn_hint.innerText = "Copy Password";
                    copy_btn_hint.style.width = "80px";
                }, 500);
            }, 1000);
        }, 500);
    }, 500);
});

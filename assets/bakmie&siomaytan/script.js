console.warn(
    "\nAll of the page content, script, and style are %cNOT%c generated with any website builders\n(so basically its written by hand)",
    "text-decoration:underline",
    "text-decoration:none"
);

function navopen() {
    var x = document.getElementById("topnav");
    if (!x.classList.contains("responsive")) {
        x.classList.add("responsive");
    } else {
        x.classList.remove("responsive");
    }
}

document.getElementById("bar-icon").addEventListener("click", () => {
    navopen();
});

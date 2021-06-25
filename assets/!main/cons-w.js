console.error("Oh look, a highlighted red text.");
console.log(
    "  %cWARNING!",
    "color: red; background: yellow; font-size: 35px; font-family: Consolas, Monospace; text-shadow: 2.5px 2.5px 0px #ffaf00; text-decoration: underline; text-decoration-thickness: .2rem",
);
console.log(
    "%c  Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.\nDo not enter or paste code that you do not understand.",
    "font-size: 18px; font-family: Consolas, Monospace;"
);
console.log(
    "For more information, goto\nhttps://en.wikipedia.org/wiki/Self-XSS"
);

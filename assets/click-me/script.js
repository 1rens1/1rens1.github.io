var box1g = true;
var box2g = false;

function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

if (isMobile()) {
    window.location.replace("/incompatible");
}

function box1change() {
    setTimeout(function() {
        document.getElementById("b1").style.backgroundColor = "red";
        document.getElementById("b2").style.backgroundColor = "lime";
        box1g = false;
        box2g = true;
    }, 100);
    
}

function box2change() {
    setTimeout(function() {
        document.getElementById("b1").style.backgroundColor = "lime";
        document.getElementById("b2").style.backgroundColor = "red";
        box1g = true;
        box2g = false;
    }, 100);
}

function box1click() {
    if (box1g) {
        location.replace("/pages/click-me/green");
    } else {
        location.replace("/pages/click-me/red");
    }
}

function box2click() {
    if (box2g) {
        location.replace("/pages/click-me/green");
    } else {
        location.replace("/pages/click-me/red");
    }
}



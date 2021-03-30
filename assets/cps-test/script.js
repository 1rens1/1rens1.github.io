
var clicked = false;
var cps = 0;
var highestCps = 0;
var clicks = 0;
var seconds = 0;

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

function elmId(id) {
    return document.getElementById(id);
}

function clock() {
    setTimeout(() => {
        seconds++;
        clock();
        updateNum();
    }, 1000);
}

function updateNum() {
    // Update the cps value
    if (isFinite(clicks/seconds)) { // isFinite makes the cps value not go Infinite
        cps = Math.round(clicks/seconds);
        if (highestCps < cps) { highestCps = cps }
        elmId('cps-res').innerText = `${cps} CPS`;
        elmId('click-here').innerHTML = `Your current cps is<br>${cps}`;

    } else { // If the results are infinite then just update the value to 0 cps
        cps = 0;
        elmId('cps-res').innerText = `0 CPS`;
    }

    // Update time value
    elmId('time-res').innerText = `${seconds}s`;

    // Update clicks value
    elmId('clicks-res').innerText = `${clicks} Clicks`;
    elmId('high-res').innerText = `${highestCps} CPS`;
}

function buttonClicked() {
    elmId('restart-a').style.visibility = 'visible';
    setTimeout(() => {
        elmId('how-works').style.visibility = 'visible';
    }, 2000);

    elmId('click-here').innerHTML = `Your current cps is<br>${cps}`;
    elmId('high-res').innerText = `${highestCps} CPS`;

    if (!clicked) {
        clock();
    }
    clicks++;
    clicked = true;
    
    updateNum();
}
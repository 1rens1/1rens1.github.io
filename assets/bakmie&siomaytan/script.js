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

const gfapp = document.getElementById("gfapp");

function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

gfapp.addEventListener("click", () => {
    var gflink;
    if (document.body.clientWidth < 600) {
        gflink = "https://gofood.link/u/N0dRK";
    } else {
        gflink =
            "https://gofood.co.id/jakarta/restaurant/bakmie-siomay-tan-catalina-bcf7e8b5-836b-4b46-9fca-8f1652634a96";
    }
    window.open(gflink);
});

document.getElementById("bar-icon").addEventListener("click", () => {
    navopen();
});

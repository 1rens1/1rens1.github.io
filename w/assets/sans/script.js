var meg = new Audio("assets/audio/megalovania.mp3");

function mouseIn() {
    meg.play();
    document.getElementById('sans-image').src = "assets/images/sans-blue-eye.png";
    document.getElementById('resetbutton').innerHTML = "Reset Music";
}

function mouseOut() {
    meg.pause();
    document.getElementById('sans-image').src = "assets/images/sans-normal.png";
}

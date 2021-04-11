function continue_btn() {
    document.getElementById('turn-up-warn').style.opacity = 0;
    var click_sound = new Audio('/assets/jmp/1-cool/sounds/mouse_click.mp3');
    var jumpscr = new Audio("/assets/jmp/1-cool/sounds/jumpscare.mp3");
    click_sound.play();
    setTimeout(() => {
        document.getElementById('boo').style.transition = "15s";
        document.getElementById('boo').src = "/assets/jmp/1-cool/images/boo.jpg";
        document.getElementById('turn-up-warn').remove();
        document.getElementById('boo').style.width = "500px";
        document.getElementById('boo').style.hieght = "500px";
        document.getElementById('boo').style.visibility = "visible";
        document.getElementById('boo').style.opacity = 0.1;
        setTimeout(() => {
            jumpscr.play();
            setTimeout(() => {
                document.body.style.backgroundImage = "url('/assets/jmp/1-cool/images/jumpscare.jpg')";
                document.getElementById('boo').src = "";
                document.getElementById('boo').style.transition = "0s";
                document.getElementById('boo').style.opacity = 1;
                document.getElementById('boo').style.width = "80%";
            }, 200);
            setTimeout(() => {
                document.body.style.backgroundImage = "";
                document.getElementById('boo').src = "/assets/jmp/1-cool/images/boo.jpg";
                document.getElementById('boo').style.width = "500px";
                document.getElementById('boo').style.hieght = "500px";
                document.getElementById('jumped-message').style.visibility = "visible";
                document.getElementById('jumped-message').style.fontSize = "50px";
            }, 2000);
        }, 10000);
    }, 3000);
}
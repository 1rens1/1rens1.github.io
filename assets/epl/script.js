changeBW();
/*
    STATE 0 = WHITE
    STATE 1 = BLACK
*/
var state = 1;

function changeBW() {
    if (state === 0) {
        document.body.style.backgroundColor = 'black';
        document.getElementById('h11').style.backgroundColor = 'white';
        state = 1;
    }if (state === 1) {
        document.body.style.backgroundColor = 'white';
        document.getElementById('h11').style.backgroundColor = 'black';
        state = 0;
    }
    setTimeout(() => {
        changeBW();
    }, 1000);
}
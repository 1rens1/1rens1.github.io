const body = document.body;
const theme_btn = document.getElementById('tog-theme');
const theme_icon = document.getElementById('theme-icon');

window.onload = function () {
    $('.loader')[0].style.opacity = '0';
    setTimeout(function () {
        $('.loader')[0].style.display = 'none';
    }, 200);
}

$('#tog-theme').click(function (e) { 
    e.preventDefault();
    if (body.className == 'light') {
        body.className = 'dark';
        theme_icon.className = 'fas fa-moon';
    } else {
        if (body.className == 'dark') {
            body.className = 'light';
            theme_icon.className = 'far fa-sun';
        }
    }
});
const body = document.body;
const theme_btn = document.getElementById('tog-theme');

$('#tog-theme').click(function (e) { 
    e.preventDefault();
    if (body.className == 'light') {
        body.className = 'dark';
        theme_btn.className = 'fas fa-moon';
    } else {
        if (body.className == 'dark') {
            body.className = 'light';
            theme_btn.className = 'far fa-sun';
        }
    }
});
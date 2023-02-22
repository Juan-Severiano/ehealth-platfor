var button = document.querySelector("#menu-hamburger");
var menu = document.querySelector(".menu");

button.addEventListener('click', function() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    }else {
        menu.style.display = 'flex';
    }
});
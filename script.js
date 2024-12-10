let menu = document.querySelector('#menu-button');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('Fa-time'); 
    navbar.classList.toggle('active');
};

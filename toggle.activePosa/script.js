let toggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('nav');

toggle.onclick = () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}
// classList Toggle on active class
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('nav');

toggle.onclick = () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}
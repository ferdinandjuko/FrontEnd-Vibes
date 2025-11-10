let banner = document.querySelector('.banner');
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    banner.classList.toggle('active');
}

let dayNight = document.querySelector('.dayNight');
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let navigation = document.querySelector('.navigation');

dayNight.onclick = () => {
    body.classList.toggle('dark');
    dayNight.classList.toggle('active');
}

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
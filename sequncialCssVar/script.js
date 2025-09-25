// The holy grail formula: animation-delay: calc(TIME * var(--i))
let imgBox = document.querySelectorAll('.box');
imgBox.forEach(popup => popup.onclick = () => {
    popup.classList.toggle('active');
})

let toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
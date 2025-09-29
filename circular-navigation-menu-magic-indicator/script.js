// Learn: box-shadow spread transforms shadows into geometric shapes

// Applied to circular menu toggle:
// - Traditional: box-shadow creates shadows (with blur)
// - Revolutionary: box-shadow creates shapes (blur=0, high spread)
// - box-shadow: 0 0 0 60px #fff, 0 0 0 68px #fff = 2 rings
// - Key insight: spread-radius without blur = solid geometric form
let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
menuToggle.onclick = function () {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

const list = document.querySelectorAll('li');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

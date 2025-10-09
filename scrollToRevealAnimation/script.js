
/* 💡 KEY: nth-child(An+B) where A=cycle, n=counter, B=offset
🎯 Result: 3 CSS rules handle 60+ elements with unique animations

Benefits: DRY code, scalable, maintainable, no JS class management
Use cases: scroll reveals, grid galleries, staggered animations
*/
for (let i = 0; i <= 60; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

// add random colors in each box
let randomColorBlock = document.querySelectorAll('.box');

function addColor() {
    randomColorBlock.forEach(block => {
        block.style.backgroundColor = randomColor();
    })
}

function randomColor() {
    let chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 1; i <= 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

addColor();

let boxes = document.querySelectorAll('.box');
let scrollTrigger = () => {
    boxes.forEach(boxxx => {
        if (boxxx.offsetTop < window.scrollY) {
            boxxx.classList.add('active');
        } else {
            boxxx.classList.remove('active');
        }
    })
}
window.addEventListener('scroll', scrollTrigger);

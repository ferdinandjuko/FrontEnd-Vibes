// Learn: column-reverse solves responsive reordering challenge Applied to footer layout: 
// - Desktop: sci | prevNext (horizontal) - Mobile: prevNext → sci (vertical reversed) 
// - Preserves accessibility while optimizing mobile UX - Key insight: visual order ≠ semantic order
// toggle
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggle.onclick = () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// slider
const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

i = 0;

let activeSlide = (n) => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slides[n].classList.add('active');
    })
}

// function for next btn
next.onclick = () => {
    if (i == slides.length - 1) {
        i = 0;
        activeSlide(i)
    } else {
        i++;
        activeSlide(i)
    }
}

// function for prev next bnt
prev.onclick = () => {
    if (i == 0) {
        i = slides.length - 1;
        activeSlide(i);
    } else {
        i--;
        activeSlide(i);
    }
}
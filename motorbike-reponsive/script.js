// Navigation
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.onclick = () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// Slider
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function setActive(i) {
    for(slide of slides) {
        slide.classList.remove('active');
        slides[i].classList.add('active');

        for(dot of dots) {
            dot.classList.remove('active');
            dots[i].classList.add('active');
        }
    }
}

for(let j = 0; j < dots.length; j++) {
    dots[j].onclick = function() {
        setActive(j);
    }
}
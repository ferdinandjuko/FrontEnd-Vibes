// only slides.active is db and dot.active has hight brightness color
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

let setActive = (index) => {
    for (slide of slides) {
        slide.classList.remove("active")
    }
    slides[index].classList.add("active")

    // add active indicator
    for (dot of dots) {
        dot.classList.remove("active")
    }
    dots[index].classList.add("active")
}
console.log(dots)
for (let j = 0; j < dots.length; j++) {
    dots[j].onclick = () => {
        console.log('upbringing');
        setActive(j)
    }
}
/*
Inline CSS Variables = HTML Data Injection System

The scalable content formula:
1. CSS defines pattern: property: var(--custom)
2. HTML provides data: style='--custom: value'
3. Each element carries unique data
4. Style logic centralized in CSS

Mental model: CSS = Reusable template, HTML vars = Per-element data
Dynamic content systems mastered
*/
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.onclick = () => {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
}

prev.onclick = () => {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
}
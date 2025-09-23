// Learn: CSS ~ selector enables element-to-sibling control Applied in navigation
// indicator: - nth-child(1):hover ~ .indicator moves to position 0 - nth-child(2):hover ~ .indicator moves to position 70px -
// Key insight: siblings can control each other's appearance - 
// Fundamental pattern for CSS-only interactive components
const list = document.querySelectorAll(".list");

list.forEach((item) => {
    item.onmouseover = (e) => {
        list.forEach((item) => {
            item.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };
});

list.forEach(elements => {
    elements.onmouseenter = (event) => {
        let bg = document.querySelector("body");
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    }
})

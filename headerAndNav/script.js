//  querySelector getting the html tag
let toggle = document.querySelector(".toggle");
let ul = document.querySelector("ul");

toggle.onclick = () => {
    toggle.classList.toggle("active");
    ul.classList.toggle("active");
}
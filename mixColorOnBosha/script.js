// ES6 allows e.currentTarget.classList.add('active'); no this.classList.add('active');
const toggle = document.querySelector('.toggle');
navigation = document.querySelector(".navigation");

toggle.onclick = () => {
    navigation.classList.toggle('active');
}


const list = document.querySelectorAll(".list");
let activeLink = (e) => {
    list.forEach((item) =>
        item.classList.remove('active'));
    e.currentTarget.classList.add('active');
}
list.forEach((item) =>
    item.onclick = activeLink);

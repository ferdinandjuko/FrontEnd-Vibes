// Preview Commit
let toggle = document.querySelector('.toggle');
let container = document.querySelector('.container');

toggle.onclick = () => {
    container.classList.toggle('active');
}


/** 
 *   Preview Commit
 *   ES6 allows e.currentTarget.classList.add('active'); no this.classList.add('active');
 */
const list = document.querySelectorAll(".list");
let activeLink = (e) => {
    list.forEach((item) =>
        item.classList.remove('active'));
    e.currentTarget.classList.add('active');
}
list.forEach((item) =>
    item.onclick = activeLink);

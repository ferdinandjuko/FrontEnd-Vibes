const list = document.querySelectorAll('.list');
console.log('list:', list);
const activeLink = (e) => {
    list.forEach((item) =>
        item.classList.remove('active'));
    e.currentTarget.classList.add('active');
}
list.forEach((item) =>
    item.onclick = activeLink);
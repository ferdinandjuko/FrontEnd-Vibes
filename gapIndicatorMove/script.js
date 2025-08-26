const list = document.querySelectorAll(".list");

let activeLink = (e) => {
    list.forEach((item) => {
        item.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
}

list.forEach((item) => {
    item.onclick = activeLink;
})

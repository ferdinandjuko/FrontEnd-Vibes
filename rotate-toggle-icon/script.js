const card = document.querySelector(".card");
const cardToggle = document.querySelector(".toggle");

cardToggle.onclick = () => {
    card.classList.toggle("active");
}

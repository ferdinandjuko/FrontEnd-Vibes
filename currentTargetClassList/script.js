// currentTarget.classList.toogle('active')
let navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = (e) => {
    e.currentTarget.classList.toggle('active');
    navigation.classList.toggle('active');
}
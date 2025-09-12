/* Color of text #262626 become bg of li.active on click cause of toggle */
let liste = document.querySelectorAll('li');
liste.forEach(element => {
    element.onclick = () => {
        let activeElement = document.querySelector('li.active');
        activeElement.classList.remove("active");
        element.classList.add("active");
    }
});
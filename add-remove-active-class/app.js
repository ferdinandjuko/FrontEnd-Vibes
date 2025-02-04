var liste = document.querySelectorAll('li');
liste.forEach(element => {
    element.addEventListener('click', function() {
        let activeElement = document.querySelector('li.active');
        activeElement.classList.remove("active");
        element.classList.add("active")
    })
});
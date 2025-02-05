window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
    console.log('La page est en train de défiler !');
});
function strength(password) {
    let i = 0;
    if (password.length > 6) {
        i++;
    }
    if (password.length >= 10) {
        i++;
    }
    if (/[A-Z]/.test(password)) {
        i++;
    }
    if (/[a-z]/.test(password)) {
        i++;
    }
    if (/[0-9]/.test(password)) {
        i++;
    }
}

let pswrd = document.querySelector('#myPassword');
let show = document.querySelector('.show');
show.onclick = function () {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text');
        show.classList.add('hide');
    } else {
        pswrd.setAttribute('type', 'password');
        show.classList.remove('hide');
    }
}
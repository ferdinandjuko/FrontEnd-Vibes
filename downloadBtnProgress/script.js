let download = document.querySelector('.download');
let container = document.querySelector('.container');
let mumber = document.getElementById('mumber');

download.onclick = function (event) {
    download.classList.add('start');
    let degree = 0;
    let interval = setInterval(() => {
        degree += 1;
        if (degree > 100) {
            clearInterval(interval);
            number.innerHTML = '<i class="fa-solid fa-check"></i>';
        }
    });
}
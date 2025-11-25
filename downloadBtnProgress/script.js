let download = document.querySelector('.download');
let container = document.querySelector('.container');
let mumber = document.getElementById('mumber');

download.onclick = function (event) {
    download.classList.add('start');
    var degree = 0;
    let interval = setInterval(function () {
        degree += 1;
        if (degree > 100) {
            clearInterval(interval);
            number.innerHTML = '<i class="fa-solid fa-check"></i><br><small>100% Done</small>';
            return;
        }
        container.style.background = `conic-gradient(#f5036c ${degree}%, #333 0%)`;
        number.innerHTML = degree + '<span>%</span>'
    }, 100);
}
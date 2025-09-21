// mousemove event .text left e.pageX+px and top e.pageY + 'px'
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

const element = document.querySelectorAll("span");

for(let i = 0; i<element.length; i++) {
    element[i].style.transform = "rotate("+i*18+"deg)";
}

document.onmousemove = (e) => {
    text.style.left = e.pageX + 'px';
    text.styl.top = e.pageY + 'px';
}
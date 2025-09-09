// set class active on toggle, navigation and li
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


// add active class in selected list item
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}
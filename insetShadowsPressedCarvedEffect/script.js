/*
Ombre externe (sortant) = 5px 5px 10px rgba(noir)
Ombre interne (enfoncé) = inset 5px 5px 10px rgba(noir) 
+ inset -5px -5px 10px rgba(noir)
*/
let inputBox = document.querySelector('#inputBox');
let list = document.querySelector('#list');

inputBox.onkeyup = (event) => {
    if (event.key === 'Enter') {
        addItem(event.currentTarget.value);
        event.currentTarget.value = '';
    }
}

let addItem = (inputBox) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputBox}<i></i>`;

    listItem.onclick = () => {
        listItem.classList.toggle('done');
    }

    listItem.querySelector('i').onclick = () => {
        listItem.remove();
    }

    list.appendChild(listItem);
}
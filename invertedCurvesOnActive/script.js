/*
box-shadow geometry simulates impossible CSS shapes

Applied to navigation marker with curved cutouts:
- Transparent element with border-top-right-radius: 20px
- box-shadow: 4px -4px 0 4px creates offset shadow
- Shadow appears as curved cutout from background
- Multiple box-shadows on main element = layered borders
- Key insight: Shadow positioning creates geometric illusions
*/
let marker = document.querySelector('#marker');
let list = document.querySelectorAll('ul li');

let moveIndicator = (e) => {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}
list.forEach(link => {
    link.onclick = (e) => {
        moveIndicator(e.target);
        // add active class in selcted list item
        list.forEach(link => {
            link.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    }
})

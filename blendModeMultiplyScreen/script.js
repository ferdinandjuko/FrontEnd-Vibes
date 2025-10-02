/* mix-blend-mode = Photoshop Blending in CSS The blend mode formula: 
1. Element with color + background 
2. Apply mix-blend-mode: [mode] 
3. CSS calculates color fusion mathematically 
4. Result: Dynamic visual effects Mental model: Layer fusion algorithms → CSS Creative masking effects mastered!
*/
// Add active class on click
const dot = document.querySelector('.dot');
const sec = document.querySelector('.sec');
dot.onclick = () => {
    dot.classList.toggle('active');
    sec.classList.toggle('active');
}

document.onmousemove = function (e) {
    const dot = document.querySelector('.dot');
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
}
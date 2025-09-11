// orientation parallax: left, right, up, down
let image1 = document.getElementsByClassName("parallaximg1");
let image2 = document.getElementsByClassName("parallaximg2");
let image3 = document.getElementsByClassName("parallaximg3");
let image4 = document.getElementsByClassName("parallaximg4");
new simpleParallax(image1, {
    orientation: 'left'
});

new simpleParallax(image2, {
    orientation: 'right'
});

new simpleParallax(image3, {
    orientation: 'up'
});

new simpleParallax(image4, {
    orientation: 'down'
});
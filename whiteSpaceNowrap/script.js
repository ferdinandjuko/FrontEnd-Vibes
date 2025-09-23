// Learn: box-shadow creates floating UI elements

// Applied to navigation drawer:
// - 0 5px 15px rgba(0,0,0,0.2) creates elevation effect
// - Pattern: offset-y + blur + low opacity = realistic depth
// - Essential for Material Design and modern interfaces
// - Creates visual hierarchy and focus"
const navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = (e) => {
    e.currentTarget.classList.toggle('active');
    navigation.classList.toggle('active');
}
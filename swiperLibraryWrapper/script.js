// Library Swiper Configuration
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverFlowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 500,
        modifier: 5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
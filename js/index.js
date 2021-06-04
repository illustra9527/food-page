/* Swiper init */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* AOS init */
AOS.init();

/* go to top */
function goTop() {
    let scrollH = document.documentElement.scrollTop;
    if (scrollH >= 200) {
        $('.go-top').addClass('visible');
    } else {
        $('.go-top').removeClass('visible');
    }
}

window.addEventListener('scroll', function () {
    goTop();
});
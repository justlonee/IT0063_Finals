document.addEventListener("DOMContentLoaded", function(){
    var swiper = new Swiper(".featured-laptops, .gaming-laptops, .office-laptops", {
        slidesPerView: 3,
        spaceBetween: 10,
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: false,
    });
})
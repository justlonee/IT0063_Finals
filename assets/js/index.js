$(document).ready(function () {
  new Swiper(".featured-laptops, .gaming-laptops, .office-laptops", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 520,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,

    centeredSlides: false,
    centeredSlidesBounds: true,
  });
});

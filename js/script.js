var swiper = new Swiper(".slide__content", {
    slidesPerView: 2,
    centerSlide: "true",
    fade: "true",
    spaceBetween: 25,
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
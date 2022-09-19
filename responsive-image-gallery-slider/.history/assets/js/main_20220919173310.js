let swiperCards = new Swiper('.gallery-cards', {
  loop: true,
  loopedSlide:5
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

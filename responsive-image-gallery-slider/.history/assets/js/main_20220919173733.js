let swiperCards = new Swiper('.gallery-cards', {
  loop: true,
  loopedSlide: 5,
  cssMode: true,
  effect: 'fade',
});
let swiperThum = new Swiper('.mySwiper2', {
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

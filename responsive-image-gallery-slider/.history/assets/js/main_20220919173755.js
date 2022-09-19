let swiperCards = new Swiper('.gallery-cards', {
  loop: true,
  loopedSlide: 5,
  cssMode: true,
  effect: 'fade',
});
let swiperThumbs = new Swiper('.gallery-thumbs', {
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

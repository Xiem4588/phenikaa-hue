//
import Swiper from 'swiper';
import { Pagination, EffectCube, Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const sliderCubeControlBlock = new Swiper("[data-slider-cube-control]", {
    modules: [Pagination, EffectCube, Autoplay],
    effect: "cube",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

const sliderImageLargeProductDetail = new Swiper("[data-product-detail-slider-large]", {
  modules: [Navigation, Thumbs],
  spaceBetween: 1,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
const sliderImageSmallProductDetail = new Swiper("[data-product-detail-slider-small]", {
  modules: [Navigation, Thumbs],
  spaceBetween: 2,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderImageLargeProductDetail,
  },
});

const sliderProductBlock = new Swiper("[data-slider-product]", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});

const sliderArticleBlock = new Swiper("[data-slider-article]", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});


const sliderCustomersBlock = new Swiper("[data-slider-customers]", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1512: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


const sliderTestimonialsBlock = new Swiper("[data-slider-testimonials]", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

export { sliderCubeControlBlock, sliderImageLargeProductDetail, sliderImageSmallProductDetail, sliderArticleBlock, sliderProductBlock, sliderCustomersBlock, sliderTestimonialsBlock };

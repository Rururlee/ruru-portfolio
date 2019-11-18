import Swiper from 'swiper';

// wakool-ads carousel
const wakoolAdsItem = new Swiper('.wakool-ads', {
    speed: 2000,
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    }
});

const wakoolAdsItem2 = new Swiper('.wakool-ads2', {
    speed: 2000,
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    }
});
import Swiper from 'swiper';


const banner = new Swiper('.swiper-container-1', {
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
    pagination: {
        el: '.swiper-pagination-1',
    },
    autoplay: {
        delay: 3000,
    },
});

const chapterRow = new Swiper('.chapter-row__swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    }
});


Vue.component("item-list", {
        template: '<div class="nav__active"><a v-for="item in items" :href="item.url" class="header__link">{{ item.item }}</a></div>',
        data: function() {
            return {
                items: [{
                    item: "about",
                    url: "index.html"
                }, {
                    item: "web",
                    url: "#"
                }, {
                    item: "design",
                    url: "#"
                }]
            }
        }
    }),
    new Vue({
        el: ".menu__nav"
    });


// for (var ae = window.location.href, ne = $(".nav__active a"), re = 0; re < ne.length; re++) {
//     var le = ne.eq(re).prop("href"); -
//     1 != ae.indexOf(le) && ne.eq(re).addClass("header__link--active")
// }
// "http://ctbc.develop.wakool.net/" != location.href && "http://ctbc.develop.wakool.net/#" != location.href || ne.eq(0).addClass("header__link--active"),
//     $(".showmenu").on("click", function(e) {
//         e.preventDefault(),
//             $("body").toggleClass("hamburger-expanded")
//     })
import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    const frontMastersSwiper = new Swiper('.swiper-masters--front', {
        loop: true,
        speed: 400,
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 40,
        centeredSlides: true,

        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    })

    const frontInteriorSwiper = new Swiper('.interior-swiper', {
        speed: 400,
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 100,
        pagination: {
            el: '.interior-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.interior-button-next',
            prevEl: '.interior-button-prev',
        },
    })


    const sidebarProgramsSwiper = new Swiper('.programs-sidebar-swiper', {
        speed: 400,
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 50,
        navigation: {
            nextEl: '.programs-sidebar-next',
            prevEl: '.programs-sidebar-prev',
        },
    })

    const mastersSingleSwiper = new Swiper('.masters__list--item', {
        speed: 400,
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 15,
    })

    const popularMastersSwiper = new Swiper('.popular-masters-swiper', {
        speed: 400,
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.popular-masters-next',
            prevEl: '.popular-masters-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40
            },
        }
    })

    if (window.matchMedia("(max-width: 576px)").matches && frontMastersSwiper.el) {
        frontMastersSwiper.destroy(true, true);
    }
    if (window.matchMedia("(max-width: 768px)").matches && frontInteriorSwiper.el) {
        frontInteriorSwiper.destroy(true, true);
    }
    if (window.matchMedia("(max-width: 768px)").matches && sidebarProgramsSwiper.el) {
        sidebarProgramsSwiper.destroy(true, true);
    }

})

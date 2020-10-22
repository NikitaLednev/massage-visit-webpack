import 'magnific-popup';
import LazyLoad from 'lazyload';

let images = document.querySelectorAll("img");

new LazyLoad(images, {
    root: null,
    rootMargin: "0px",
    threshold: 0
});



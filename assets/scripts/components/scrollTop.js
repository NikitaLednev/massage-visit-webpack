const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', trackScroll);
scrollBtn.addEventListener('click', backToTop);

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = 700;

    if (scrolled > coords) {
        scrollBtn.classList.add('show');
    }
    if (scrolled < coords) {
        scrollBtn.classList.remove('show');
    }
}

function backToTop() {
    window.scrollTo(0, 0);
}

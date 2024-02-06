//show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


//remove menu by click on link
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction));


//swiper
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: "auto"
        },
        1152: {
            centeredSlides: "auto",
            spaceBetween: -64
        },
    }
});


//change bg on scroll
const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 10
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
}

window.addEventListener("scroll", bgHeader);


//animation on scroll
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    reset: true
});

sr.reveal(`.home__swiper, .home__footer`, { scale: .7 });
sr.reveal(`.home__circle`, { scale: 1.5, delay: 300 });
sr.reveal(`.home__subcircle`, { scale: 1.8, delay: 600 });
sr.reveal(`.home__title`, { scale: 3, origin: 'bottom', delay: 1200 });
sr.reveal(`.swiper-button-prev, .swiper-button-next`, { origin: 'bottom' });





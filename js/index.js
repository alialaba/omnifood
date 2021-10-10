//navbar toggling
let headerEl = document.querySelector('.header');
let btnEl = document.querySelector('.btn-mobile-nav');

btnEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
})

// Sticky navigation

//navbar toggling
let headerEl = document.querySelector('.header');
let btnEl = document.querySelector('.btn-mobile-nav');

btnEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
})

// Sticky navigation
// let sectionHeroEl = document.querySelector('.section-hero');
// const obs = new IntersectionObserver(
//     function (entries) {
//         let ent = entries[0];
//         console.log(ent);
//         if (ent.isIntersecting === false) {
//             document.body.classList.add('sticky');
//         }

//         if (ent.isIntersecting === true) {
//             document.body.classList.remove('sticky')
//         }

//     },
//     {
//         // In the viewport
//         root: null,
//         threshold: 0,
//         rootMargin: '-80px'

//     }
// );
// obs.observe(sectionHeroEl);

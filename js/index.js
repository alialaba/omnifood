//navbar toggling
let headerEl = document.querySelector('.header');
let btnEl = document.querySelector('.btn-mobile-nav');


btnEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
})
//select all a:link
const allLinks = document.querySelectorAll("a:link")
allLinks.forEach((link)=>{
link.addEventListener('click',(e)=>{
e.preventDefault();

const href = link.getAttribute('href');

// Scroll back to top
if(href === "#"){
    window.scrollTo({
        top : 0,
        behavior: 'smooth'
    })
}
// Scroll to other links
if(href !== '#' && href.startsWith('#')){
    const sectionEl=document.querySelector(href)
    sectionEl.scrollIntoView({behavior: 'smooth'});
}


// Close mobile naviagtion
if(link.classList.contains('nav-list'))
headerEl.classList.toggle("nav-open");

})
})



// Sticky navigation
let sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
    function (entries) {
        let ent = entries[0];
        if (ent.isIntersecting === false) {
            document.body.classList.add('sticky');
        }
        if (ent.isIntersecting === true) {
            document.body.classList.remove('sticky');
        }

    },
    {
        rootMargin: '-80px',
        threshold: 0,
        root: null
    }
)
obs.observe(sectionHeroEl);
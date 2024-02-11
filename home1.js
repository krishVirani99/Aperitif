const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.hero-text',{origin: 'top'});


sr.reveal('.os-text h5, .os-text p',{origin: 'bottom'});
sr.reveal('.os-text h2',{origin: 'top'});
sr.reveal('.os-img',{origin: 'left'});


sr.reveal('.h-middle-img',{origin: 'bottom'});
sr.reveal('.text-center',{origin: 'top'});
sr.reveal('.h-left-text',{origin: 'left'});
sr.reveal('.h-right-text',{origin: 'right'});


sr.reveal('.img',{origin: 'bottom'});
sr.reveal('.text-center',{origin: 'top'});


sr.reveal('.about-us-img',{origin: 'bottom'});
sr.reveal('.text-center-about-us',{origin: 'top'});
sr.reveal('.about-us-logo',{origin: 'left'});
sr.reveal('.about-us-dtl',{origin: 'right'});
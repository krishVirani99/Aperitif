const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 200)
});



const sr = ScrollReveal({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.dtl1 h2, .dtl2 h5',{origin: 'top'});
sr.reveal('.quantity',{origin: 'bottom'});
sr.reveal('.img_1',{origin: 'left'});
sr.reveal('.dtl3 p',{origin: 'right'});


sr.reveal('.about-us-img',{origin: 'bottom'});
sr.reveal('.text-center-about-us',{origin: 'top'});
sr.reveal('.about-us-logo',{origin: 'left'});
sr.reveal('.about-us-dtl',{origin: 'right'});
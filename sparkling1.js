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

sr.reveal('.heading',{origin: 'top'});
sr.reveal('.p',{origin: 'bottom'});


sr.reveal('.about-us-img',{origin: 'bottom'});
sr.reveal('.text-center-about-us',{origin: 'top'});
sr.reveal('.about-us-logo',{origin: 'left'});
sr.reveal('.about-us-dtl',{origin: 'right'});
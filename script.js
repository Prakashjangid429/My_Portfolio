// let menuBtn= document.getElementById('menu-bar');
function toggle(){
    let menubar = document.getElementById('menu-bar');
    menubar.classList.toggle("menu-bar-out");
}
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,

});

sr.reveal('.home-content h3,.home-content h1,.wrapper ,.home-content p,.heading,.project,.contact',{}); 
sr.reveal('.service-content i,.service-content h3,.service-content p,.service-content .btn',{interval: 300}); 
sr.reveal('.about-content h2,.about-content h4,.about-content p,.about-content .btn,.contact-input',{ interval: 300}); 


const srbottom = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 100,

});
srbottom.reveal('.logo,.menu,.icon,.btn,.home-img img',{});
srbottom.reveal('.about-img',{delay:300})
srbottom.reveal('.service-content,.project-content',{interval:300})
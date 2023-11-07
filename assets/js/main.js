let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

//scroll animation

const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset:'true'
})

sr.reveal('.home-text, .buds-text',{origin: 'left'})
sr.reveal('.home-img, .buds-img',{origin: 'right'})
sr.reveal('.heading',{delay: 100})
sr.reveal('.specs-details .box',{origin: 'left', interval:100})
sr.reveal('.specs-img',{delay: 300})
sr.reveal('.shop-container .box, .footer .logo2, .footer .footer-box',{interval:75})
sr.reveal('.left-login', {origin: 'left'})
sr.reveal('.right-login', {delay: 2000})

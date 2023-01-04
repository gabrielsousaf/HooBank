let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}



// SHOW SCROLL UP
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);



// NAVBAR ACTIVE
document.querySelectorAll('.navbar li a').forEach(el => {
    el.onclick = () => {
      document.querySelectorAll('.navbar li a').forEach(el => el.classList.remove('active'));
      el.classList.add('active');
    }
})


// SCROLL REVEAL
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
})

sr.reveal(`.content-1, .numbers-section, .clients`)
sr.reveal(`.content-2, .info1, .card-footer`, {origin:'bottom'})
sr.reveal(`.product-image, .container-info2, .apps`, {origin:'left'})
sr.reveal(`.product-text, .info2-image`, {origin:'right'})
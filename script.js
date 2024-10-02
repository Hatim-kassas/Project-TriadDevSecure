// Script Navbar Scrolled
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 60){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})
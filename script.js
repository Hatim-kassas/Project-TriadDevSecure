// Script Navbar Scrolled
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 60){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Process
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    function activateStep() {
        steps.forEach(step => step.classList.remove("active"));

        if (currentStep < steps.length) {
            steps[currentStep].classList.add("active");
            currentStep++;
            setTimeout(activateStep, 800);
        } else {
            steps.forEach(step => {
                step.style.color = "black";
                step.style.opacity = "1";
            });
        }
    }

    const processSection = document.querySelector(".our-process");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateStep();
                observer.unobserve(processSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(processSection);
});


// Services
document.addEventListener("DOMContentLoaded", () => {
    const servicesSection = document.querySelector(".our-services");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add("active");
                observer.unobserve(servicesSection);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(servicesSection);
});

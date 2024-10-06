// Script Navbar Scrolled
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 60){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll('.section');

        const options = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add a visible class
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    });
</script>

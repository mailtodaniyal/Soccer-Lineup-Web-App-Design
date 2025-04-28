document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.slider-dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            showTestimonial(parseInt(this.getAttribute('data-index')));
        });
    });
    
    // Auto slide
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Scroll down button
    document.querySelector('.scroll-down').addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight - 100,
            behavior: 'smooth'
        });
    });
    
    // Floating ball click
    document.querySelector('.floating-ball').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 2rem';
            header.style.background = 'var(--secondary)';
        } else {
            header.style.padding = '1rem 2rem';
            header.style.background = 'linear-gradient(135deg, var(--secondary), var(--primary))';
        }
    });
    
    // Animate steps on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.step').forEach((step, index) => {
        step.style.opacity = '0';
        step.style.animationDelay = `${index * 0.2}s`;
        observer.observe(step);
    });
    
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = 'fadeInUp 0.8s ease forwards';
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
});

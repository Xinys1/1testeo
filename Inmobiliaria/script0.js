document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Iniciar con la primera imagen
    slides[0].classList.add('active');

    // Cambiar cada 4 segundos
    setInterval(nextSlide, 4000);

    console.log("Inmobiliaria Martinez & Lopes cargado con éxito.");
});
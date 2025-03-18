// Slider para el álbum de fotos
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambiar slide cada 2 segundos
setInterval(nextSlide, 2000);

// Mostrar el primer slide al cargar
showSlide(currentSlide);
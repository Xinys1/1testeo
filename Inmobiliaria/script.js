// Conjuntos de imágenes para cada propiedad
const sliders = {
    house1: ['ja1.jpg', 'ja2.jpg', 'ja3.jpeg'],
    house2: ['im1.jpg', 'im2.jpg', 'im3.jpg'],
    house3: ['ima1.jpg', 'ima2.jpg', 'ima3.jpg']
};

// Slider de imágenes por propiedad
document.querySelectorAll('.property-img-container').forEach(container => {
    const img = container.querySelector('.property-img');
    const sliderName = img.getAttribute('data-slider');
    const images = sliders[sliderName];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = images[currentIndex];
            img.style.opacity = 1;
        }, 500); // Transición más rápida
    }, 4500);
});

// Ordenar propiedades
function sortProperties() {
    const gallery = document.getElementById('property-gallery');
    const properties = Array.from(gallery.getElementsByClassName('property'));
    const sortPrice = document.getElementById('sort-price').value;
    const sortCity = document.getElementById('sort-city').value;

    let sortedProperties = [...properties];

    if (sortPrice !== 'default') {
        sortedProperties.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            return sortPrice === 'asc' ? priceA - priceB : priceB - priceA;
        });
    }

    if (sortCity !== 'default') {
        sortedProperties.sort((a, b) => {
            const cityA = a.getAttribute('data-city');
            const cityB = b.getAttribute('data-city');
            return sortCity === 'asc' ? cityA.localeCompare(cityB) : cityB.localeCompare(cityA);
        });
    }

    gallery.innerHTML = '';
    sortedProperties.forEach(property => gallery.appendChild(property));
}

// Activar ordenación con el botón "Buscar"
document.getElementById('search-btn').addEventListener('click', sortProperties);

// Pop-up
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const mainImage = document.querySelector('.main-image');
const secondaryImages = document.querySelectorAll('.image-block img');

const popupImages = {
    house1: {
        main: 'ja1.jpg',
        secondary: ['ja1_room1.jpg', 'ja1_room2.jpg', 'ja1_room3.jpg', 'ja1_room4.jpg', 'ja1_room5.jpg', 'ja1_room6.jpg']
    },
    house2: {
        main: 'barcelona_house_main.jpg',
        secondary: ['barcelona_house_sec1.jpg', 'barcelona_house_sec2.jpg', 'barcelona_house_sec3.jpg', 'barcelona_house_sec4.jpg', 'barcelona_house_sec5.jpg', 'barcelona_house_sec6.jpg']
    },
    house3: {
        main: 'valencia_house_main.jpg',
        secondary: ['valencia_house_sec1.jpg', 'valencia_house_sec2.jpg', 'valencia_house_sec3.jpg', 'valencia_house_sec4.jpg', 'valencia_house_sec5.jpg', 'valencia_house_sec6.jpg']
    }
};

document.querySelectorAll('.more-info-button').forEach(button => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup');
        const images = popupImages[popupId];

        mainImage.src = images.main;
        secondaryImages.forEach((img, index) => {
            img.src = images.secondary[index];
        });

        popup.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Cerrar pop-up al hacer clic fuera del contenido
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
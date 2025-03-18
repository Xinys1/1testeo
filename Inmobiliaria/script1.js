// Función para abrir el popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';
    popup.classList.add('fade-in'); // Añadir animación
}

// Función para cerrar el popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('fade-in');
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none';
        popup.classList.remove('fade-out');
    }, 300); // Tiempo de la animación
}

// Mostrar el popup de ubicación cuando se haga clic en el enlace de Ubicación
document.getElementById('situacionBtn').onclick = function(event) {
    event.preventDefault();
    openPopup('situacionPopup');
}
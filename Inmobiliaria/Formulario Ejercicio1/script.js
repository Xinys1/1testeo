function validarFormulario(event) {
    event.preventDefault();
    let isValid = true;
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    // Nombre: 3 a 30 caracteres
    const nombre = document.getElementById('nombre').value;
    if (nombre.length < 3 || nombre.length > 30) {
        document.querySelector('#nombre + .error').textContent = '3-30 caracteres';
        isValid = false;
    }

    // Edad: 3 a 130 años
    const edad = document.getElementById('edad').value;
    if (isNaN(edad) || edad < 3 || edad > 130) {
        document.querySelector('#edad + .error').textContent = '3-130 años';
        isValid = false;
    }

    // Email: formato válido
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.querySelector('#email + .error').textContent = 'Email inválido';
        isValid = false;
    }

    // Contraseña: mínimo 7 caracteres, al menos un número
    const password = document.getElementById('password').value;
    const hasNumber = /\d/;
    if (password.length < 7 || !hasNumber.test(password)) {
        document.querySelector('#password + .error').textContent = 'Mín. 7 caracteres, 1 número';
        isValid = false;
    }

    // Repita contraseña: debe coincidir
    const repeatPassword = document.getElementById('repeatPassword').value;
    if (repeatPassword !== password) {
        document.querySelector('#repeatPassword + .error').textContent = 'No coincide';
        isValid = false;
    }

    // Idioma: al menos uno seleccionado
    const idiomas = document.querySelectorAll('input[name="idioma"]:checked');
    if (idiomas.length === 0) {
        document.querySelector('.checkbox-group + .error').textContent = 'Selecciona uno';
        isValid = false;
    }

    // Acepto condiciones: debe estar marcado
    const condiciones = document.getElementById('condiciones').checked;
    if (!condiciones) {
        document.querySelector('.checkbox-wrapper .error').textContent = 'Debe aceptar';
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado con éxito');
        document.getElementById('registroForm').reset();
        document.getElementById('espanol').checked = true; // Español seleccionado por defecto
        document.getElementById('condiciones').checked = true; // Condiciones seleccionado por defecto
    }

    return isValid;
}
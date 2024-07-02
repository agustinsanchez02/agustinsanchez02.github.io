document.getElementById('form').addEventListener('focus', function(event) {
    clearError(event.target);
}, true);

document.getElementById('form').addEventListener('blur', function(event) {
    validateField(event.target);
}, true);

function clearError(element) {
    element.style.background = '';
    const errorElement = document.getElementById('error' + capitalizeFirstLetter(element.id));
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function validateField(element) {
    switch (element.id) {
        case 'nombre':
            return validarNombre(element);
        case 'email':
            return validarEmail(element);
        case 'password':
            return validarPassword(element);
        case 'password2':
            return validarPassword2(element);
        case 'edad':
            return validarEdad(element);
        case 'telefono':
            return validarTelefono(element);
        case 'direccion':
            return validarDireccion(element);
        case 'ciudad':
            return validarCiudad(element);
        case 'codigoPostal':
            return validarCodigoPostal(element);
        case 'dni':
            return validarDni(element);
    }
    return true;
}

function showError(element, message) {
    element.style.background = 'lightpink';
    const errorElement = document.getElementById('error' + capitalizeFirstLetter(element.id));
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function validarNombre(element) {
    if (element.value.length < 6 || element.value.indexOf(' ') === -1) {
        showError(element, 'Nombre inválido. Debe tener al menos 6 caracteres y un espacio.');
        return false;
    }
    return true;
}

function validarEmail(element) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(element.value)) {
        showError(element, 'Email inválido. Debe tener un formato válido.');
        return false;
    }
    return true;
}

function validarPassword(element) {
    if (element.value.length < 8) {
        showError(element, 'Contraseña inválida. Debe tener al menos 8 caracteres.');
        return false;
    }
    return true;
}

function validarPassword2(element) {
    const password = document.getElementById('password').value;
    if (element.value !== password) {
        showError(element, 'Las contraseñas no coinciden.');
        return false;
    }
    return true;
}

function validarEdad(element) {
    const edad = parseInt(element.value);
    if (isNaN(edad) || edad < 18 || edad > 120) {
        showError(element, 'Edad inválida. Debe ser un número entre 18 y 120.');
        return false;
    }
    return true;
}

function validarTelefono(element) {
    const telefonoRegex = /^[0-9]{7,14}$/;
    if (!telefonoRegex.test(element.value)) {
        showError(element, 'Teléfono inválido. Debe tener entre 7 y 14 dígitos.');
        return false;
    }
    return true;
}

function validarDireccion(element) {
    if (element.value.length < 10) {
        showError(element, 'Dirección inválida. Debe tener al menos 10 caracteres.');
        return false;
    }
    return true;
}

function validarCiudad(element) {
    if (element.value.length < 3) {
        showError(element, 'Ciudad inválida. Debe tener al menos 3 caracteres.');
        return false;
    }
    return true;
}

function validarCodigoPostal(element) {
    const codigoPostalRegex = /^[0-9]{4,6}$/;
    if (!codigoPostalRegex.test(element.value)) {
        showError(element, 'Código Postal inválido. Debe tener entre 4 y 6 dígitos.');
        return false;
    }
    return true;
}

function validarDni(element) {
    const dniRegex = /^[0-9]{7,8}$/;
    if (!dniRegex.test(element.value)) {
        showError(element, 'DNI inválido. Debe tener entre 7 y 8 dígitos.');
        return false;
    }
    return true;
}

function submitForm() {
    const form = document.getElementById('form');
    let valid = true;

    Array.from(form.elements).forEach(element => {
        if (element.tagName === 'INPUT') {
            if (!validateField(element)) {
                valid = false;
            }
        }
    });

    if (valid) {
        // Procesar el formulario
        alert('Formulario enviado correctamente.');
    } else {
        alert('Por favor, corrija los errores en el formulario.');
    }
}

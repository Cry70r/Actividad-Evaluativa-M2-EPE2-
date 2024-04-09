document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const showRegister = document.getElementById('showRegister');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        // Aquí deberías enviar una solicitud HTTP POST al servidor para autenticar al usuario.
        // Por simplicidad, solo simularemos la autenticación aquí.
        if (username === 'usuario' && password === 'contraseña') {
            alert('Inicio de sesión exitoso');
            // Redirigir al usuario a la página principal, por ejemplo:
            // window.location.href = 'index.html';
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
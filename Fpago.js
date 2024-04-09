document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Aquí debes enviar una solicitud HTTP POST al servidor para procesar el pago.
        // Por simplicidad, solo simularemos el pago aquí.
        if (cardNumber && expiryDate && cvv) {
            alert('¡Pago realizado con éxito!');
            // Redirigir al usuario a una página de confirmación, por ejemplo:
            // window.location.href = 'confirmacion.html';
        } else {
            alert('Por favor, complete todos los campos');
        }
    });
});

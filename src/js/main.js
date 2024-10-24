import '../scss/styles.scss'
import * as bootstrap from 'bootstrap';
import emailjs from 'emailjs-com';

// email.js

// Inicializa EmailJS con tu Public API Key
(function() {
    emailjs.init("bXke7shnbcuKVFm-y"); 
})();

// Manejo del envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Envía el formulario utilizando EmailJS
    emailjs.sendForm('service_ta8oex9', 'template_szahe49', this)
        .then(function() {
            document.getElementById('response-message').innerHTML = "¡Correo enviado exitosamente!";
        }, function(error) {
            console.error("Error al enviar el correo:", error); // Muestra el error en la consola
            document.getElementById('response-message').innerHTML = "Error al enviar el correo, envíanos un WhatsApp.";
        });

    this.reset(); // Resetea el formulario después del envío
});

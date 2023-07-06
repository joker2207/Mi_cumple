document.addEventListener('DOMContentLoaded', function () {
    var confirmButton = document.getElementById('confirmButton');
    var cancelButton = document.getElementById('cancelButton');
    var explosionImages = document.getElementsByClassName('explosion-image');
    var birthdaySong = document.getElementById('birthdaySong');
    var container = document.getElementsByClassName('container')[0];
    var confirmationCount = 0;
    var cancellationCount = 0;
    var counterElement = document.getElementById('counter');
    var isConfirmed = false;
    var isCancelled = false;

    // Oculta todas las imágenes al cargar la página
    Array.from(explosionImages).forEach(function (image) {
        image.style.display = 'none';
    });

    // Función para mostrar la imagen y reproducir el audio cuando se presiona el botón "Confirmar"
    confirmButton.addEventListener('click', function () {
        container.innerHTML = ''; // Elimina todo el contenido dentro del contenedor
        container.appendChild(explosionImages[0]); // Agrega la imagen de explosión al contenedor
        explosionImages[0].style.display = 'block'; // Muestra la imagen de explosión
        birthdaySong.play(); // Reproduce la canción de cumpleaños
        confirmationCount++; // Incrementa el contador de confirmaciones
        updateCounter(); // Actualiza el contador en la pantalla
    });

    confirmButton.addEventListener('click', function () {
        container.innerHTML = ''; // Elimina todo el contenido dentro del contenedor
        var explosionImage = new Image();
        explosionImage.classList.add('explosion-image');
        explosionImage.src = 'https://cardsimages.info-tuparada.com/1834/30313-3-invitacion-a-mi-cumpleanos.jpg';
        container.appendChild(explosionImage); // Agrega la imagen de explosión al contenedor
        explosionImage.style.display = 'block'; // Muestra la imagen de explosión

        var birthdaySong = new Audio('Mishelle Master Boys - La Quemona (Video Oficial) Música Urbana.mp3');
        birthdaySong.preload = 'auto'; // Asegura que el navegador cargue el audio antes de reproducirlo
        birthdaySong.volume = 1; // Establece el volumen al 100%

        birthdaySong.play(); // Reproduce la canción de cumpleaños
        confirmationCount++; // Incrementa el contador de confirmaciones
        updateCounter(); // Actualiza el contador en la pantalla
    });

    // Función para mostrar el mensaje de cancelación y actualizar el contador cuando se presiona el botón "Cancelar"
    cancelButton.addEventListener('click', function () {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = '¡Qué pena! Te perderás una gran fiesta.';
        errorMessage.classList.add('error-message');
        container.innerHTML = '';
        container.appendChild(errorMessage);
        cancellationCount++; // Incrementa el contador de cancelaciones
        updateCounter(); // Actualiza el contador en la pantalla
    });


    // Función para actualizar el contador en la pantalla
    function updateCounter() {
        counterElement.textContent = 'Confirmaciones: ' + confirmationCount + ' | Cancelaciones: ' + cancellationCount;
    }
});

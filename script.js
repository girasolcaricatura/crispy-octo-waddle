document.addEventListener('DOMContentLoaded', function() {
    const gifs = [
      './textos/estrofa1.png',
      './textos/estrofa2.png',
      './textos/estrofa3.png',
      './textos/estrofa5.png',
      './textos/estrofa6.png',
      './textos/estrofa7.png',
      './textos/estrofa9.png',
      './textos/estrofa8.png',
      './textos/estrofa10.png',
      './textos/estrofa11.png',// Agrega más gifs según sea necesario
    ];
    
    let currentIndex = 0;
    const content = document.querySelector('.content');
    const gifElement = document.getElementById('gif');
    const audio = document.getElementById('ruidoBlanco');

    function showNextGif() {
      // Muestra el contenedor y reproduce el audio en el primer clic
      if (currentIndex === 0) {
        content.classList.remove('hidden');
        audio.play().then(() => {
          console.log('Ruido blanco reproduciéndose.');
        }).catch(error => {
          console.error('Error al reproducir el sonido:', error);
        });
      }

      // Cambia el gif actual al siguiente en la lista y verifica que el cambio ocurra
      gifElement.src = gifs[currentIndex];
      console.log(`Mostrando GIF: ${gifs[currentIndex]}`); // Mensaje de depuración
      currentIndex++;

      // Si se han mostrado todos los gifs, reinicia el ciclo
      if (currentIndex >= gifs.length) {
        currentIndex = 0; 
      }
    }

    // Detecta el primer clic para mostrar el primer gif y reproducir el audio
    document.addEventListener('click', showNextGif);
  });
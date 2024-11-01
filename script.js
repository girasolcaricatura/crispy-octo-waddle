
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
        './textos/estrofa11.png', // Agrega más gifs según sea necesario
    ];
    
    let currentIndex = 0;

  const content = document.querySelector('.content');
  const gifElement = document.getElementById('gif');

  document.addEventListener('click', function() {
    const audio = document.getElementById('ruidoBlanco');

    // Reproduce el ruido blanco y maneja el primer clic
    audio.play().then(() => {
      console.log('Ruido blanco reproduciéndose.');

      // Muestra el contenedor si es la primera vez que se hace clic
      if (currentIndex === 0) {
        content.classList.remove('hidden');
      }

      // Cambia el gif solo si no hemos llegado al final de la lista
      if (currentIndex < gifs.length) {
        gifElement.src = gifs[currentIndex];
        currentIndex++;
      }

      // Si llegamos al final, puedes hacer algo opcional
      if (currentIndex >= gifs.length) {
        console.log('Has visto todos los gifs.');
        // Aquí puedes agregar lógica si quieres mostrar un mensaje o hacer algo más
      }
    }).catch(error => {
      console.error('Error al reproducir el sonido:', error);
    });
  });
});
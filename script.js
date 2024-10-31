
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function() {
      const audio = document.getElementById('ruidoBlanco');
      const content = document.querySelector('.texto'); // Selecciona el contenedor del texto
  
      audio.play().then(() => {
        console.log('Ruido blanco reproduciéndose.');
        content.classList.remove('hidden'); // Muestra el texto
      }).catch(error => {
        console.error('Error al reproducir el sonido:', error);
      });
    }, { once: true });
  });
  
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const synth = window.speechSynthesis;
  
    // Detener cualquier reproducción anterior
    synth.cancel();
    synth.speak(utterance);
  }
  
  // Evento de clic en el botón
  const readButton = document.getElementById('readButton');
  readButton.addEventListener('click', () => {
    const textToRead = "Tu texto a leer en voz alta";
    speakText(textToRead);
  });
  
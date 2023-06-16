function obtenerFraseMotivacional() {
    // Crear una instancia de XMLHttpRequest para realizar la solicitud
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      // Verificar si la solicitud se ha completado con éxito
      if (this.readyState === 4 && this.status === 200) {
        // Analizar la respuesta JSON recibida
        const data = JSON.parse(this.responseText);
        const fraseOriginal = data.content;
        const autor = data.author;
  
        // URL de la API de MyMemory para realizar la traducción
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(fraseOriginal)}&langpair=en|es`;
        
        // Realizar la solicitud de traducción utilizando fetch
        fetch(url)
          .then(response => response.json())
          .then(translationData => {
            // Obtener la frase traducida de la respuesta
            const fraseTraducida = translationData.responseData.translatedText;
            const fraseElemento = document.getElementById("fraseMotivacional");
            // Actualizar el contenido del elemento en el HTML con la frase traducida y el autor
            fraseElemento.innerHTML = `<i>"${fraseTraducida}" - ${autor}</i>`;
          })
          .catch(error => {
            console.error('Error al traducir la frase:', error);
          });
      }
    };
    // Realizar una solicitud para obtener una frase motivacional en inglés
    xhttp.open("GET", "https://api.quotable.io/random", true);
    xhttp.send();
  }
  
  // Agregar un evento de carga para llamar a la función obtenerFraseMotivacional cuando se cargue la página
  window.addEventListener("load", obtenerFraseMotivacional);  
function obtenerFraseMotivacional() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        const fraseOriginal = data.content;
        const autor = data.author;
  
        // Traducción al español utilizando MyMemory API
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(fraseOriginal)}&langpair=en|es`;
        
        fetch(url)
          .then(response => response.json())
          .then(translationData => {
            const fraseTraducida = translationData.responseData.translatedText;
            const fraseElemento = document.getElementById("fraseMotivacional");
            fraseElemento.textContent = `"${fraseTraducida}" - ${autor}`;
          })
          .catch(error => {
            console.error('Error al traducir la frase:', error);
          });
      }
    };
    xhttp.open("GET", "https://api.quotable.io/random", true);
    xhttp.send();
  }
  
  window.addEventListener("load", obtenerFraseMotivacional);  
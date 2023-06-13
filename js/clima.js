navigator.geolocation.getCurrentPosition(position => {
    const llaveApi = 'f6eef5a237f49c0fc3fe0c19bf0ee229';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${llaveApi}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Obtener elementos HTML
        const divClima = document.getElementById('clima'); // Elemento para mostrar la temperatura
        const divDia = document.getElementById('tudia'); // Elemento para mostrar el mensaje combinado

        // Obtener datos del clima de la API
        const temperaturaKelvin = data.main.temp;
        const temperaturaCelsius = temperaturaKelvin - 273.15;
        const temperaturaMaximaKelvin = data.main.temp_max;
        const temperaturaMaximaCelsius = temperaturaMaximaKelvin - 273.15;
        const temperaturaMinimaKelvin = data.main.temp_min;
        const temperaturaMinimaCelsius = temperaturaMinimaKelvin - 273.15;
        const timestampSalidaSol = data.sys.sunrise;
        const timestampPuestaSol = data.sys.sunset;
        const weatherId = data.weather[0].id;
  
        // Calcular fechas y horas
        const salidaSol = new Date(timestampSalidaSol * 1000);
        const puestaSol = new Date(timestampPuestaSol * 1000);
        const horaSalidaSol = salidaSol.getHours();
        const minutosSalidaSol = salidaSol.getMinutes();
        const horaPuestaSol = puestaSol.getHours();
        const minutosPuestaSol = puestaSol.getMinutes();
  
        // Función para formatear la hora en formato AM/PM
        const formatearHora = (hora, minutos) => {
          const meridiano = hora < 12 ? 'am' : 'pm';
          hora = hora % 12;
          hora = hora ? hora : 12;
          const horaFormateada = hora < 10 ? '0' + hora : hora;
          const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
          return horaFormateada + ':' + minutosFormateados + ' ' + meridiano;
        };
  
        // Formatear las horas de salida y puesta del sol
        const horaSalidaSolFormateada = formatearHora(horaSalidaSol, minutosSalidaSol);
        const horaPuestaSolFormateada = formatearHora(horaPuestaSol, minutosPuestaSol);
  
        // Mostrar datos en los elementos HTML correspondientes
        divClima.innerHTML = `La temperatura actual en <strong>${data.name}</strong> es de ${temperaturaCelsius.toFixed(2)}°C con una máxima para hoy de ${temperaturaMaximaCelsius.toFixed(2)}°C y una mínima de ${temperaturaMinimaCelsius.toFixed(2)}°C. El sol saldrá a las ${horaSalidaSolFormateada} y se pondrá a las ${horaPuestaSolFormateada}.`;

        // Verificar si va a llover o no
        const estaLloviendo = (weatherId >= 200 && weatherId <= 299) || (weatherId >= 300 && weatherId <= 399) || (weatherId >= 500 && weatherId <= 599) || (weatherId >= 600 && weatherId <= 699);

        // Mostrar el resultado de si va a llover o no en el elemento HTML correspondiente
        if (estaLloviendo) {
            const divLluvia = document.createElement('div');
            divLluvia.innerHTML = "Va a llover, Mejor deja tus entrenamientos para el dojo o un gimnasio...";
            divDia.appendChild(divLluvia);
          } else {
            const divLluvia = document.createElement('div');
            divLluvia.innerHTML = "¡No va a llover! ¡Puedes ir a entrenar al aire libre si lo deseas!";
            divDia.appendChild(divLluvia);
          }
    
          // Mostrar mensaje de temperatura según el rango
          if (temperaturaCelsius <= 15) {
            const divMensajeTemperatura = document.createElement('div');
            divMensajeTemperatura.innerHTML = "Y recuerda que hace frío, es recomendable usar una primera capa abajo de tu kimono. ¡Organízate bien y disfruta tu entrenamiento!";
            divDia.appendChild(divMensajeTemperatura);
          } else if (temperaturaCelsius > 15 && temperaturaCelsius <= 21) {
            const divMensajeTemperatura = document.createElement('div');
            divMensajeTemperatura.innerHTML = "Y recuerda que hace una temperatura agradable, puedes usar tu kimono con o sin primera capa o camiseta de compresión. ¡Organízate bien y disfruta tu entrenamiento!";
            divDia.appendChild(divMensajeTemperatura);
          } else {
            const divMensajeTemperatura = document.createElement('div');
            divMensajeTemperatura.innerHTML = "Y recuerda que hace calor, por lo que asegúrate de llevar agua y usar un kimono liviano sin primera capa. ¡Organízate bien y disfruta tu entrenamiento!";
            divDia.appendChild(divMensajeTemperatura);
          }
      });
  });
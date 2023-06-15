// Definir un objeto JSON con la información de los grados
const gradosJSON = `[
  { "nombre": "blanco", "descripcion": "<p><strong>El grado blanco</strong> marca el comienzo de un apasionante viaje en el mundo del Jiu-Jitsu Brasileño (BJJ). Este grado se caracteriza por sentar los cimientos fundamentales y promover una dedicación constante al aprendizaje y la práctica regular del BJJ.</p><p>Durante esta etapa inicial, los practicantes adquieren un conocimiento sólido de las técnicas fundamentales, así como una comprensión básica de las posiciones y los principios de control y defensa. Además, se enfatiza el desarrollo de una mentalidad disciplinada y perseverante. Los estudiantes de grado blanco se animan a establecer una rutina de entrenamiento constante, familiarizarse con los conceptos básicos del arte marcial y disfrutar del proceso de aprendizaje y crecimiento en el Jiu-Jitsu Brasileño.</p><p>A medida que avanzan en este grado, sentarán una base sólida que les permitirá progresar y explorar las complejidades y sutilezas del BJJ en grados superiores.</p><iframe width=\\"100%\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/G0lPrZ3mwXU\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>" },
  { "nombre": "azul", "descripcion": "El grado azul representa un hito significativo en el camino del Jiu-Jitsu Brasileño (BJJ). Este grado se otorga a aquellos practicantes que han demostrado un conocimiento sólido de las técnicas fundamentales y han adquirido experiencia en la aplicación de ellas en situaciones de combate. Los estudiantes de grado azul poseen una base sólida y han desarrollado habilidades que les permiten enfrentarse a diferentes desafíos en el tatami. Además de dominar las posiciones básicas y las transiciones, los practicantes de grado azul han participado activamente en competiciones, lo que les ha brindado una valiosa experiencia en un entorno de alto rendimiento. Con un mínimo de 2 años de entrenamiento, estos practicantes continúan refinando sus habilidades y expandiendo su repertorio técnico. El grado azul es un escalón crucial en el camino del BJJ, ya que sienta las bases para el crecimiento y la progresión hacia grados superiores. Los estudiantes de grado azul están motivados para seguir aprendiendo, perfeccionando sus técnicas y aplicando estrategias más avanzadas en su práctica. A medida que se sumergen en este grado, adquieren una mayor comprensión de la efectividad del Jiu-Jitsu Brasileño y su aplicación en diversas situaciones de combate real." },
  { "nombre": "purpura", "descripcion": "El grado púrpura representa un nivel intermedio en el Jiu-Jitsu Brasileño (BJJ) y marca un importante avance en el camino del practicante. Aquellos que han alcanzado el grado púrpura han demostrado un dominio significativo de una amplia variedad de técnicas, así como una capacidad notable para adaptarse a diferentes estilos de lucha y situaciones de combate. Estos practicantes han adquirido un profundo conocimiento de las estrategias del BJJ y poseen una comprensión sólida de los principios fundamentales que rigen el arte marcial. Con un mínimo de 5 años de entrenamiento dedicado, los estudiantes de grado púrpura han invertido tiempo y esfuerzo en perfeccionar sus habilidades y desarrollar un estilo propio en el BJJ. Además, han demostrado una destacada participación en competiciones, lo que les ha brindado valiosas lecciones y experiencia en un entorno competitivo. Los practicantes de grado púrpura continúan expandiendo su repertorio técnico, afinando sus movimientos y refinando su capacidad para leer y anticipar las acciones de sus oponentes. A medida que avanzan en este grado, se les anima a profundizar en su comprensión del arte marcial, explorando conceptos más avanzados y mejorando su capacidad para ejecutar estrategias efectivas. El grado púrpura es un hito importante en el viaje del BJJ, marcando la transición hacia niveles superiores de conocimiento y habilidad en este fascinante arte marcial." },
  { "nombre": "cafe", "descripcion": "El grado café representa un nivel avanzado en el Jiu-Jitsu Brasileño (BJJ) y es un testimonio del arduo trabajo, la dedicación y la experiencia adquirida por el practicante. Aquellos que han alcanzado el grado café han perfeccionado técnicas avanzadas y han desarrollado un profundo conocimiento del arte marcial. Con un mínimo de 7 años de entrenamiento constante, los estudiantes de grado café han alcanzado un nivel de maestría en el BJJ. Estos practicantes han demostrado la capacidad no solo para aplicar técnicas sofisticadas con precisión, sino también para enseñar y transmitir sus conocimientos a otros estudiantes. Además, han destacado en competiciones de alto nivel, lo que demuestra su habilidad excepcional en un entorno competitivo. Los practicantes de grado café continúan perfeccionando su arte, refinando cada detalle de sus movimientos y explorando nuevas formas de adaptarse a diferentes estilos de lucha. También juegan un papel importante en la comunidad del BJJ, compartiendo su experiencia y contribuyendo al desarrollo y promoción del arte marcial. El grado café representa un hito importante en el viaje del BJJ, simbolizando el logro de un nivel avanzado de conocimiento y habilidad, así como el reconocimiento por parte de la comunidad de practicantes. Los estudiantes de grado café continúan su búsqueda constante de la excelencia en el Jiu-Jitsu Brasileño y son modelos a seguir para los que están detrás de ellos." },
  { "nombre": "negro", "descripcion": "El grado negro es el pináculo del Jiu-Jitsu Brasileño (BJJ), representando un nivel experto y un reconocimiento del dominio completo del arte marcial. Aquellos que alcanzan el grado negro han dedicado al menos 12 años de entrenamiento intenso y constante en el BJJ. Han perfeccionado una amplia gama de técnicas y estrategias, demostrando un conocimiento profundo y una habilidad excepcional en el tatami. Los practicantes de grado negro no solo poseen una destreza física impresionante, sino que también han hecho contribuciones significativas al desarrollo y promoción del BJJ. Han compartido su experiencia con otros estudiantes, enseñando y guiando a la próxima generación de practicantes. Además, han logrado un reconocimiento destacado dentro de la comunidad del BJJ debido a su participación en competiciones de alto nivel y su éxito en enfrentamientos desafiantes. El grado negro simboliza el compromiso inquebrantable y el sacrificio requerido para alcanzar la maestría en el Jiu-Jitsu Brasileño. Los estudiantes de grado negro continúan expandiendo su repertorio técnico, explorando nuevas variaciones y adaptaciones, y profundizando su comprensión del arte marcial. También se dedican a transmitir los valores y principios del BJJ, promoviendo el respeto, la disciplina y el crecimiento personal. El grado negro no es solo un logro individual, sino un reconocimiento de la contribución y el impacto que el practicante ha tenido en la comunidad del BJJ. Aquellos que alcanzan el grado negro se convierten en referentes en el mundo del Jiu-Jitsu Brasileño, inspirando a otros y dejando un legado duradero en el arte marcial." },
  { "nombre": "coral", "descripcion": "El grado coral en el Jiu-Jitsu Brasileño (BJJ) representa un nivel maestro y es un reconocimiento excepcional de la dedicación de toda una vida al arte marcial. Aquellos que alcanzan el grado coral han invertido un mínimo de 25 años de entrenamiento continuo en el BJJ, demostrando una pasión inquebrantable y un compromiso inigualable. Los practicantes de grado coral han adquirido un conocimiento profundo y una comprensión extraordinaria del BJJ en todas sus facetas. Han refinado sus habilidades técnicas hasta la perfección y poseen una capacidad única para adaptarse a cualquier situación de combate. Además, han realizado contribuciones significativas al desarrollo y evolución del BJJ, dejando una huella duradera en la comunidad y en el arte marcial en sí. El grado coral también es un reconocimiento a su dedicación en la enseñanza y transmisión de conocimientos a otros estudiantes. Estos maestros del BJJ han influenciado y moldeado a numerosas generaciones de practicantes, dejando un impacto profundo en la comunidad del BJJ. Además, el grado coral simboliza la sabiduría, la humildad y el respeto que se han cultivado a lo largo de los años de práctica. Estos practicantes son considerados referentes y modelos a seguir, no solo por su habilidad técnica, sino también por su integridad y ética en la vida diaria. En resumen, el grado coral en el Jiu-Jitsu Brasileño representa un nivel maestro y un reconocimiento excepcional a aquellos que han dedicado una vida entera al arte marcial. Estos practicantes son considerados tesoros vivientes del BJJ, y su experiencia y sabiduría continúan impactando y enriqueciendo el mundo del Jiu-Jitsu Brasileño." }
]`;

// Convertir el objeto JSON en un array de objetos JavaScript
const grados = JSON.parse(gradosJSON);
  
// Obtener referencias a los elementos del DOM
const formulario = document.getElementById("formulario");
const resultadoContainer = document.getElementById("resultado");
const detalleContainer = document.getElementById("detalle");
const inputBusqueda = document.getElementById("busquedaGrado");
const botonBuscar = document.getElementById("botonBuscar");
const botonLogout = document.getElementById("botonLogout");
const nombreUsuario = document.getElementById("nombreUsuario");

// Verificar si hay datos de usuario en el localStorage al cargar la página
window.addEventListener("load", function () {
  const nombreGuardado = localStorage.getItem("nombre");
  const gradoGuardado = localStorage.getItem("grado");
  const añosGuardado = localStorage.getItem("años");
  
  if (nombreGuardado && gradoGuardado && añosGuardado) {
    formulario.nombre.value = nombreGuardado;
    formulario.grado.value = gradoGuardado;
    formulario.años.value = añosGuardado;
    nombreUsuario.textContent = nombreGuardado;
    botonLogout.style.display = "inline-block";    
  }
});

//Manejador boton logout
botonLogout.addEventListener("click", function () {
  const nombreActual = formulario.nombre.value;
  swal({
    title: `${nombreActual}`,
    content: {
      element: "div",
      attributes: {
        innerHTML: '<strong>¿Quieres cerrar sesión?</strong>',
      }
    },
    icon: "warning",
    buttons: ["Cancelar", "Aceptar"],
  }).then(function (confirmar) {
    if (confirmar) {
      swal({
        title: `${nombreActual}`,
        content: {
          element: "div",
          attributes: {
            innerHTML: '<strong>Haz cerrado tu sesión...</strong>',
          }
        },
        icon: "success",
        button: false,
        timer: 2000,
      }).then(function () {
        localStorage.removeItem("nombre");
        localStorage.removeItem("grado");
        localStorage.removeItem("años");
        location.reload();
      });
    }
  });
});
  
// Asignar un manejador de eventos al formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const nombre = formulario.nombre.value.trim();
  const gradoActual = formulario.grado.value.toLowerCase();
  const añosEntrenando = parseInt(formulario.años.value);

  if (nombre === "" || gradoActual === "" || isNaN(añosEntrenando)) {
    swal({
      content: {
        element: "div",
        attributes: {
          innerHTML: '<strong>Por favor, completa todos los campos...</strong>',
        }
      }, 
      icon: "error",
      button: false,
      timer: 2000,
    });
    return;
  }
  
  if (nombre && gradoActual && !isNaN(añosEntrenando)) {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("grado", gradoActual);
    localStorage.setItem("años", añosEntrenando);
  }
  
  let añosParaSiguienteGrado = 0;
  let gradoSiguiente = "";
  
  if (gradoActual === "blanco") {
    if (añosEntrenando >= 0) {
      añosParaSiguienteGrado = 2 - añosEntrenando;
      gradoSiguiente = "azul";
    } else {
      resultadoContainer.textContent = `Debe haber ingresado un número positivo de años, ${nombre}.`;
      return;
    }
  } else if (gradoActual === "azul") {
    if (añosEntrenando >= 2) {
      añosParaSiguienteGrado = 5 - añosEntrenando;
      gradoSiguiente = "purpura";
    } else {
      añosParaSiguienteGrado = 2 - añosEntrenando;
      if (añosParaSiguienteGrado < 0) {
        añosParaSiguienteGrado = 0;
      }
      resultadoContainer.textContent = `No llevas el tiempo suficiente para ser cinturón azul, ${nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`;
      return;
    }
  } else if (gradoActual === "purpura") {
    if (añosEntrenando >= 5) {
      añosParaSiguienteGrado = 7 - añosEntrenando;
      gradoSiguiente = "cafe";
    } else {
      añosParaSiguienteGrado = 5 - añosEntrenando;
      if (añosParaSiguienteGrado < 0) {
        añosParaSiguienteGrado = 0;
      }
      resultadoContainer.textContent = `No llevas el tiempo suficiente para ser cinturón purpura, ${nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`;
      return;
    }
  } else if (gradoActual === "cafe") {
    if (añosEntrenando >= 7) {
      añosParaSiguienteGrado = 10 - añosEntrenando;
      gradoSiguiente = "negro";
    } else {
      añosParaSiguienteGrado = 7 - añosEntrenando;
      if (añosParaSiguienteGrado < 0) {
        añosParaSiguienteGrado = 0;
      }
      resultadoContainer.textContent = `No llevas el tiempo suficiente para ser cinturón cafe, ${nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`;
      return;
    }
  } else if (gradoActual === "negro") {
    if (añosEntrenando >= 12) {
      añosParaSiguienteGrado = 25 - añosEntrenando;
      gradoSiguiente = "coral";
    } else {
      añosParaSiguienteGrado = 12 - añosEntrenando;
      if (añosParaSiguienteGrado < 0) {
        añosParaSiguienteGrado = 0;
      }
      resultadoContainer.textContent = `No llevas el tiempo suficiente para ser cinturón negro, ${nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`;
      return;
    }
  } else {
    resultadoContainer.textContent = "";
    return;
  }
  if (añosParaSiguienteGrado >= 0) {
    resultadoContainer.textContent = `${nombre}, te faltan ${añosParaSiguienteGrado} años para obtener el cinturón ${gradoSiguiente}. ¡Vamos que se puede!`;
  } else {
    const añosSuperados = Math.abs(añosParaSiguienteGrado);
    resultadoContainer.textContent = `${nombre}, ¡ya has superado el tiempo necesario para obtener el cinturón ${gradoSiguiente} por ${añosSuperados} años! Te recomiendo hablar con tu instructor...`;
  }
  
  // Limpiar el contenedor de detalles
  detalleContainer.textContent = "";
}); 

// Agregar funcionalidad de búsqueda
document.getElementById('botonBuscar').addEventListener('click', (event) => {
  event.preventDefault(); // Evita el envío del formulario si no se cumple la validación

  const input = document.getElementById('busquedaGrado').value.trim();
  if (input === '') {
    swal({
      content: {
        element: "div",
        attributes: {
          innerHTML: '<strong>Ingresa tu búsqueda primero...</strong>',
        }
      },      
      icon: "error",
      button: false,
      timer: 2000,
    });
    return;
  }

  const textoBusqueda = input.toLowerCase();
  buscarGrado(textoBusqueda);
});

function buscarGrado(textoBusqueda) {
  const gradoEncontrado = grados.find(
    (grado) =>
      grado.nombre.toLowerCase() === textoBusqueda.toLowerCase() ||
      grado.descripcion.toLowerCase() === textoBusqueda.toLowerCase()
  );

  const detalleContainer = document.getElementById('detalle');

  if (gradoEncontrado) {
    const nombreCapitalizado = `${gradoEncontrado.nombre.charAt(0).toUpperCase()}${gradoEncontrado.nombre.slice(1)}`;
    detalleContainer.innerHTML = `<strong><u>Grado ${nombreCapitalizado}:</u></strong><br><br>${gradoEncontrado.descripcion}`;
  } else {
    swal({
      icon: "error",
      timer: 10000,
      content: {
        element: "div",
        attributes: {
          innerHTML: '<strong>Grado no encontrado...</strong><br><p>Los grados disponibles son: Blanco, Azul, Purpura, Cafe, Negro y Coral.</p>',
        }
      }
    });    
  }
}
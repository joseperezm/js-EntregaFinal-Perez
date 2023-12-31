// Obtener referencia al elemento del DOM donde se mostrará la lista de usuarios
const ultimosUsuariosContainer = document.getElementById("ultimosUsuarios");

// Función para obtener los últimos usuarios del localStorage
function obtenerUltimosUsuarios() {
  const ultimosUsuarios = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("usuario-")) {
      const usuario = JSON.parse(localStorage.getItem(key));
      ultimosUsuarios.push(usuario);
    }
  }
  return ultimosUsuarios;
}

// Función para mostrar los últimos usuarios en el DOM
function mostrarUltimosUsuarios() {
  const ultimosUsuarios = obtenerUltimosUsuarios();

  // Limpiar el contenedor antes de mostrar los usuarios
  ultimosUsuariosContainer.innerHTML = "";

  if (ultimosUsuarios.length === 0) {
    // Mostrar el mensaje de historial vacío
    ultimosUsuariosContainer.textContent = "Historial vacío";
  } else {
    // Mostrar los últimos 30 usuarios en orden inverso (los más recientes primero)
    const cantidadUsuarios = Math.min(ultimosUsuarios.length, 30);
    for (let i = cantidadUsuarios - 1; i >= 0; i--) {
      const usuario = ultimosUsuarios[i];
      const usuarioElemento = document.createElement("div");
      usuarioElemento.textContent = `Nombre: ${usuario.nombre}, Grado: ${usuario.grado}, Años entrenando: ${usuario.años}`;
      ultimosUsuariosContainer.appendChild(usuarioElemento);
    }
  }
}

// Escuchar el evento submit del formulario principal para guardar los datos de usuario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = formulario.nombre.value.trim();
  const gradoActual = formulario.grado.value.toLowerCase();
  const añosEntrenando = parseInt(formulario.años.value);

  // Verificar si algún campo está vacío
  if (nombre === "" || gradoActual === "" || isNaN(añosEntrenando) || (añosEntrenando < 0 && añosEntrenando !== 0)) {
    // Mostrar un mensaje de error o tomar alguna acción apropiada
    return; // Salir de la función sin guardar los datos
  }

  // Guardar los datos de usuario en el localStorage
  const usuario = { nombre, grado: gradoActual, años: añosEntrenando };
  localStorage.setItem(`usuario-${Date.now()}`, JSON.stringify(usuario));

  // Actualizar la lista de últimos usuarios mostrada en el DOM
  mostrarUltimosUsuarios();
});

// Mostrar los últimos usuarios al cargar la página
mostrarUltimosUsuarios();

// Obtener referencia al botón de eliminar historial
const botonEliminarHistorial = document.getElementById("eliminarHistorial");

// Manejador de evento click del botón
botonEliminarHistorial.addEventListener("click", function () {
  eliminarHistorial();
});

// Función para eliminar el historial de usuarios
function eliminarHistorial() {
  const nombreActual = formulario.nombre.value;
  const ultimosUsuarios = obtenerUltimosUsuarios();

  if (ultimosUsuarios.length === 0) {
    swal({
      title: `${nombreActual}`,
      content: {
        element: "div",
        attributes: {
          innerHTML: '<strong>No hay usuarios en el historial...</strong>',
        }
      },
      icon: "error",
      button: false,
      timer: 2000,
    });
  } else {
    swal({
      title: `${nombreActual}`,
      content: {
        element: "div",
        attributes: {
          innerHTML: '<strong>¿Quieres borrar el historial?</strong>',
        }
      },
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
    }).then(function (confirmar) {
      if (confirmar) {
        for (let i = localStorage.length - 1; i >= 0; i--) {
          const key = localStorage.key(i);
          if (key.startsWith("usuario-")) {
            localStorage.removeItem(key);
          }
        }
        mostrarUltimosUsuarios();
        swal({
          title: `${nombreActual}`,
          content: {
            element: "div",
            attributes: {
              innerHTML: '<strong>¡Historial borrado!</strong>',
            }
          },
          icon: "success",
          button: false,
          timer: 2000,
        });
      }
    });
  }
}
window.onload = function() {
  // Obtener el año actual
  let anioActual = new Date().getFullYear();

  // Mostrar el año actual en el elemento div
  let divAnioActual = document.getElementById("anioActual");
  divAnioActual.innerHTML = `${anioActual}`;
};
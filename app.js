let amigos = [];

function limpiarCaja() {
  document.getElementById("amigo").value = "";
  return;
}

function agregarAmigo() {
  // obtengo el valor que ingresa el usuario en el input
  let valorIngresado = document.getElementById("amigo").value;

  // si no se ingresa un valor, devolvemos un mensaje, sino introducimos el valor ingresado al array

  valorIngresado == ""
    ? alert(`Debes ingresar un nombre`)
    : amigos.push(valorIngresado);

  // limpiamos la caja input y llamamos a la funcion que recorre el array e imprime los nombres como una lista
  limpiarCaja();
  recorrerAmigos(amigos);

  return amigos;
}

function recorrerAmigos(array) {
  let listaAmigos = document.getElementById("listaAmigos"); // obtenemos el elemento donde vamos a cargar los nombres
  listaAmigos.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    // para cada elemento de la lista...
    let li = document.createElement("li"); // creamos una etiqueta <li></li>
    li.innerText = array[i]; // y le asignamos el valor del array en la posición [i]
    listaAmigos.appendChild(li); // usamos la funcion appendChild() para agregar como hijo de lista amigos a la etiqueta <li></li>
  }
  return;
}

function sortearAmigo() {
  amigos.length == 0 ? alert(`No hay amigos para sortear`) : ""; // verificamos que el array no este vacío

  let numAleatorio = Math.floor(Math.random() * amigos.length); // creamos el num aleatorio
  let resultado = document.getElementById("resultado"); // accedemos al elemento de lista a traves del DOM
  resultado.innerText = amigos[numAleatorio]; // le asignamos el texto del nombre

  limpiarCaja();

  return;
}

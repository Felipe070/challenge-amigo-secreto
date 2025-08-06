let amigos = [];
let amigosYaSorteados = [];

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
  let resultado = document.getElementById("resultado"); // accedemos al elemento de lista a traves del DOM

  // hacemos 2 if anidados para sortear a todos los amigos de la lista
  amigos.length == 0
    ? alert(`No hay amigos para sortear`)
    : amigosYaSorteados.length != amigos.length
    ? (resultado.innerText = amigos[generarNumAleatorio()])
    : (resultado.innerText = "Se sortearon a todos los amigos")(
        reiniciarJuego()
      ); // verificamos que el array no este vacío  y le asignamos el texto del nombre

  limpiarCaja();

  return;
}

function reiniciarJuego() {
  document.getElementById("btnAniadir").setAttribute("disabled", "true");
  let btnReiniciar = document.getElementById("btnSortear");
  btnReiniciar.innerHTML = `
    <img id="playImg" src="assets/play_circle_outline.png" alt="Ícono para sortear">
    Reiniciar
  `;
  btnReiniciar.className = "button-draw";
  btnReiniciar.setAttribute("onclick", "valoresPorDefecto();");
}

function valoresPorDefecto() {
  limpiarCaja();
  amigos = [];
  amigosYaSorteados = [];

  // volvemos a configurar el boton Añadir
  document.getElementById("btnAniadir").removeAttribute("disabled");
  document
    .getElementById("btnAniadir")
    .setAttribute("onclick", "agregarAmigo();");

  // volvemos a configurar el boton Sortear
  let btnSortearAmigo = document.getElementById("btnSortear");
  btnSortearAmigo.innerHTML = `
    <img id="playImg" src="assets/play_circle_outline.png" alt="Ícono para sortear">
    Sortear amigo
  `;
  btnSortearAmigo.setAttribute("onclick", "sortearAmigo();");
  btnSortearAmigo.className = "button-draw";

  // limpiamos las listas previas
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("listaAmigos").innerHTML = "";
}

function generarNumAleatorio() {
  let numAleatorio = Math.floor(Math.random() * amigos.length); // genera un número aleatorio

  if (amigosYaSorteados.includes(numAleatorio)) {
    return generarNumAleatorio(); // si el número ya fue usado, generamos otro
  }
  amigosYaSorteados.push(numAleatorio); // agregamos el número generado al array de números usados
  return numAleatorio;
}

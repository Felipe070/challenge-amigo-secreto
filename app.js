let amigos = [];

function limpiarCaja() {
  document.getElementById("amigo").value = "";
  return;
}

function agregarAmigo() {
  let valorIngresado = document.getElementById("amigo").value;

  if (valorIngresado == "") {
    alert(`Debes ingresar un nombre`);
  } else {
    amigos.push(valorIngresado);
  }

  limpiarCaja();
  recorrerAmigos(amigos);
  console.log(amigos);
  return amigos;
}

function recorrerAmigos(array) {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.innerText = array[i];
    listaAmigos.appendChild(li);
  }
  return;
}

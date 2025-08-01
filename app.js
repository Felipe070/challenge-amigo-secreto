let nombresIngresados = [];


function limpiarCaja() {
  document.getElementById("amigo").value = "";
  return;
}

function agregarAmigo(){
    let valorIngresado = document.getElementById("amigo").value;

    if (valorIngresado == "") {
        alert(`Debes ingresar un nombre`);
    } else {
        nombresIngresados.push(valorIngresado);
    }

    limpiarCaja();

    return console.log(nombresIngresados);
}


var contadorElemento = document.getElementById("contador");
var contador = 0;

function incrementarContador() {
  contador++;
  actualizarContador();
}

function decrementarContador() {
  contador--;
  actualizarContador();
}

function actualizarContador() {
  contadorElemento.innerText = contador;
}
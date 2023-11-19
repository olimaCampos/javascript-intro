var precioInicial = 400000;
var cantidad =0;

const precioDisplay = document.querySelector('.precio-inicial');
const cantidadDisplay = document.querySelector('.cantidad');
const totalDisplay = document.querySelector('.valor-total');

precioDisplay.textContent = precioInicial;
cantidadDisplay.textContent = cantidad;

function aumentar() {
  cantidad++;
  cantidadDisplay.textContent = cantidad;
  actualizarTotal();
}

function disminuir() {
  if (cantidad > 0) {
    cantidad--;
    cantidadDisplay.textContent = cantidad;
    actualizarTotal();
  }
}

function actualizarTotal() {
    const total = precioInicial * cantidad;
    totalDisplay.textContent = total;
  }

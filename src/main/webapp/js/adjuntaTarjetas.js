import { vaciarCampos, eliminaError } from "./modificadoresVisualesCampos.js";
import { creaNuevaEntrada, obtenerEntradas } from "./manipuladorJSON.js";
import { presentacionCards } from "./funcionalidadesTarjetas.js";
//Obtiene los valores del form, los introduce en el registro y resetea el form
export function generadorCard() {
  //Obtenemos los valores del registro
  let values = getValues();

  //Introducimos la nueva entrada en el registro
  creaNuevaEntrada(values[0], values[1], values[2], values[3]);

  //Obtenemos todos los valores del registro
  var entradasRegistro = obtenerEntradas();

  //presenta las cards
  presentacionCards(entradasRegistro, ".card");

  //Vaciamos todos los campos
  vaciarCampos(".form-control");

  //Reseteamos los colores y mensajes del form
  eliminaError(".form-control");
}

//Introduzce los valores de los input en un Array
function getValues() {
  let valores = [];
  let i = 0;
  (valores[i++] = $("#nombre").val()),
    (valores[i++] = $("#descripcion").val()),
    (valores[i++] = $("#precio").val()),
    (valores[i++] = $("#stock").val());
  return valores;
}

//Crea el cuerpo de las entradas
export const adjuntarTarjeta = (registro, numRegistro) => {
  var imagenDelete = "media/basura.png";
  var imagenModificar = "media/pencil.png";
  $(".tarjetas").append(
    `
    <div class="col-sm-4 mb-4">
      <div class="card shadow" id=Card-${numRegistro}>
        <div class="card-header p-2 font-weight-bold light-gray">${registro.nombre}<img src="${imagenDelete}" width="32px" height="32px" class="delete">
          <span role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight" class="modify"></span></div>
        <div class=" text-secondary p-2 min-height texto-principal">
          <p class="card-text">${registro.descripcion}</p>
        </div>
        <div class="row justify-content-between p-2 text-secondary">
          <div class="col-4 font-weight-medium">
              ${registro.precio}€
            </div>
            <div class=" col-7 flex-end font-weight-medium ">
              Cantidad: ${registro.stock}
            </div>
          </div>
      </div>
    </div>
    `
  );
};

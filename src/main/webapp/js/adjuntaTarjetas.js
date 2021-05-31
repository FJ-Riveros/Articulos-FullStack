import { vaciarCampos, eliminaError } from "./modificadoresVisualesCampos.js";
import { presentacionCards } from "./funcionalidadesTarjetas.js";
//Obtiene los valores del form, los introduce en el registro y resetea el form
export function generadorCard() {

  //presenta las cards
  presentacionCards(".card");

  //Vaciamos todos los campos
  vaciarCampos(".form-control");

  //Reseteamos los colores y mensajes del form
  eliminaError(".form-control");
}

//Introduzce los valores de los input en un Array
export function getValues() {
  let valores = [];
  let i = 0;
  (valores[i++] = $("#nombre").val()),
    (valores[i++] = $("#descripcion").val()),
    (valores[i++] = $("#precio").val()),
    (valores[i++] = $("#stock").val());
  return valores;
}

//Crea el cuerpo de las entradas
export const adjuntarTarjeta = (articulo) => {
  var imagenDelete = "media/basura.png";
  var imagenModificar = "media/pencil.png";
  var plus = "media/plus.png";
  $(".tarjetas").append(
    `
    <div class="col-sm-4 mb-4">
      <div class="card shadow" id=Card-${articulo.id}>
        <div class="card-header p-2 font-weight-bold light-gray">${articulo.nombre}<button type="button" class="botonAñadir" data-bs-toggle="modal" data-bs-target="#modalArticulo">
  			<img src="${plus}" width="25px" height="25px" class="addIcon">
		  </button><img src="${imagenDelete}" width="32px" height="32px" class="delete">
          <span role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight" class="modify"></span></div>
        <div class=" text-secondary p-2 min-height texto-principal">
          <p class="card-text">${articulo.descripcion}</p>
        </div>
        <div class="row justify-content-between p-2 text-secondary">
          <div class="col-4 font-weight-medium">
              ${articulo.precio}€
            </div>
            <div class=" col-7 flex-end font-weight-medium ">
              Unidades: ${articulo.existencia}
            </div>
          </div>
      </div>
    </div>
    `
  );
};

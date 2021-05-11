import { vaciarCampos } from "./modificadoresVisualesCampos.js";
import {
  IDTarjetaAModificar,
  presentacionCards,
} from "./funcionalidadesTarjetas.js";
import { modificaEntrada, obtenerEntradas } from "./manipuladorJSON.js";
const getValuesCanvas = () => {
  let valores = [];
  let i = 0;
  (valores[i++] = $("#nombreModificacion").val()),
    (valores[i++] = $("#descripcionModificacion").val()),
    (valores[i++] = $("#precioModificacion").val()),
    (valores[i++] = $("#stockModificacion").val());
  return valores;
};

export const modificaTarjeta = () => {
  //Cerramos el offCanvas
  $("#closeWindow").click();

  //Obtenemos los valores del Canvas(Modificación)
  let prueba = getValuesCanvas();

  //Modificamos la tarjeta con los datos recogidos
  modificaEntrada(
    IDTarjetaAModificar(),
    prueba[0],
    prueba[1],
    prueba[2],
    prueba[3]
  );

  //Presentamos las cards
  presentacionCards(obtenerEntradas(), ".card");

  //Vaciamos los campos para la siguiente utilización
  vaciarCampos(".groupModificacion");
};

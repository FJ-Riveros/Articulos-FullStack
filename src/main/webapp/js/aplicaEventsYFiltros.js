import {
  filtroPrecio,
  filtroStock,
  validacionYEventListenner,
} from "./filtros.js";
import { vaciarCampos,eliminaError} from "./modificadoresVisualesCampos.js";
import {
  compruebaCampos,
  compruebaCamposVacios,
  exponeCamposVacios,
} from "./compruebaCampos.js";
import{reseteaComprobacion, validaComprobacion} from "./apruebaForm.js";
import { generadorCard, getValues } from "./adjuntaTarjetas.js";
import { modificaTarjeta } from "./modificadorTarjeta.js";
import {addArticulo} from "./AJAX.js";

export let aplicaEventListennersYFiltros = () => {
  /*Validamos el campo nombre y aplicamos el event listenner
  junto con una restriccion de 15 caracteres max. Con true indicamos que queremos comprobar
  si el campo del form se repite. */
  validacionYEventListenner("#nombre", 15, true);

  /*Validamos el campo descripcion y aplicamos el event listenner
  junto con una restriccion de 15 caracteres max. Con false indicamos que no queremos comprobar
  si el campo del form se repite. */
  validacionYEventListenner("#descripcion", 100, false);

  //Validamos el campo Precio y aplicamos el event listenner
  filtroPrecio("#precio");

  //Validamos el campo Stock y aplicamos el event listenner
  filtroStock("#stock");

  /*Listener del envio del form, inserta el nuevo artículo si todos los campos
  son válidos y no hay ninguno vacio, de lo contrario expone los campos vacios
  */
  $("#enviar").click((e) => {
    e.preventDefault();
    if (
      validaComprobacion() && compruebaCamposVacios(".form-control")
    ) {
      //Obtiene los valores del form y los inserta en la base de datos
      let valores = getValues();
      //Insertamos en la BDD y mostramos las cards
      addArticulo(valores[0], valores[1], valores[2], valores[3]);
      //vaciarCampos(".form-control");
      // FALLA eliminaError(".form-control");
      //Reseteamos el form
      reseteaComprobacion();
    } else {
      //Señala los campos vacios del form
      exponeCamposVacios(".form-control");
    }
  });

  ///////////Events y Filtros de los campos del Offcanvas(modificacion de tarjetas)///////////

  /*Validamos el campo nombre y aplicamos el event listenner
  junto con una restriccion de 15 caracteres max */
  validacionYEventListenner("#nombreModificacion", 15, true);

  /*Validamos el campo descripcion y aplicamos el event listenner
  junto con una restriccion de 15 caracteres max */
  validacionYEventListenner("#descripcionModificacion", 100, false);

  //Validamos el campo Precio y aplicamos el event listenner
  filtroPrecio("#precioModificacion");

  //Validamos el campo Stock y aplicamos el event listenner
  filtroStock("#stockModificacion");
  $("#enviarModificacion").click(() => {
    
    if (
      compruebaCampos(".campoInvalido") &&
      compruebaCamposVacios(".groupModificacion")
    ) {
      //Desencadenamos la acción de modificar la tarjeta
      modificaTarjeta("id");
    } else {
      //Señala los campos vacios del form
      exponeCamposVacios(".groupModificacion");
    }
  });
};

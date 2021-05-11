import { obtenerEntradas } from "./manipuladorJSON.js";

export const rellenaCamposModificacion = (id) => {
  let nombreOriginal = $("#nombreModificacion"),
    descripcionOriginal = $("#descripcionModificacion"),
    precioOriginal = $("#precioModificacion"),
    stockOriginal = $("#stockModificacion");

  let entradas = obtenerEntradas();
  $(nombreOriginal).val(entradas[id].nombre),
    $(descripcionOriginal).val(entradas[id].descripcion),
    $(precioOriginal).val(entradas[id].precio),
    $(stockOriginal).val(entradas[id].stock);
};

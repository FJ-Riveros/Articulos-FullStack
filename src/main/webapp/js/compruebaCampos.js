import { adjuntaError } from "./modificadoresVisualesCampos.js";
//Busca si hay algún campo que no pase el filtro, devuelve true si no hay errores y false en caso contrario
export function compruebaCampos() {
  if ($(".campoInvalido").length) {
    return false;
  } else {
    return true;
  }
}

//Devuelve true si no hay algún campo vacio, false en caso contrario
export function compruebaCamposVacios(campoAComprobar) {
  let objetoComprobacion = $(`${campoAComprobar}`);
  for (let i = 0; i < objetoComprobacion.length; i++) {
    if ($(objetoComprobacion[i]).val() == "") {
      return false;
    }
  }
  return true;
}

/*Devuelve true si el campo que se le pasa como parámetro está vacio (""),
devuelve false en caso contrario*/
export function campoVacio(idElemento) {
  if ($(`${idElemento}`).val() == "") return true;
  return false;
}

//Recorre todos los campos y si alguno está vacio lo muestra con un color de error
export function exponeCamposVacios(campoAComprobar) {
  let objetoComprobacion = $(`${campoAComprobar}`);
  for (let i = 0; i < objetoComprobacion.length; i++) {
    if (campoVacio("#" + $(objetoComprobacion[i]).attr("id"))) {
      adjuntaError(
        "#" + $(objetoComprobacion[i]).attr("id"),
        "Rellene este campo por favor"
      );
    }
  }
}

import {
  adjuntaError,
  eliminaError,
  campoCorrecto,
} from "./modificadoresVisualesCampos.js";
import { campoVacio } from "./compruebaCampos.js";
import { busquedaNombreExistente } from "./manipuladorJSON.js";

/*Valida el campo que se le pase con restricciones de numero máximo de carácteres, sólo letras y
añade el event listenner correspondiente, si tenemos true comprobamos también que el valor del campo
no se repita en las tarjetas*/
export function validacionYEventListenner(
  idElemento,
  caracteresMax,
  comprobacionRepetidos
) {
  $(`${idElemento}`).focusout(() => {
    eliminaError(idElemento);
    //Comprueba si cumple con la longitud
    if (!filtroLongitud(idElemento, caracteresMax)) {
      adjuntaError(
        idElemento,
        `La longitud debe de ser de ${caracteresMax} caracteres como máximo`
      );
      //Comprueba si cumple con los carácteres determinados y el campo no esté vacio
    } else if (!filtroSoloLetras(idElemento) && !campoVacio(idElemento)) {
      adjuntaError(
        idElemento,
        "No puede contener números o carácteres especiales"
      );
      //Comprueba que el nombre no exista en otra tarjeta y el campo no esté vacio
    } else if (
      busquedaNombreExistente($(idElemento).val()) &&
      !campoVacio(idElemento) &&
      comprobacionRepetidos
    ) {
      adjuntaError(idElemento, "El nombre indicado ya existe en otra tarjeta");
      //Comprueba que el campo no esté vacio
    } else if (!campoVacio(idElemento)) {
      campoCorrecto(idElemento);
    }
  });
}

//Filtro especifico para el campo Stock(solo enteros)
export function filtroStock(idElemento) {
  $(`${idElemento}`).focusout(() => {
    eliminaError(idElemento);
    if (filtroSoloEnteros(idElemento)) {
      campoCorrecto(idElemento);
    } else if (!campoVacio(idElemento)) {
      adjuntaError(idElemento, "Este campo solo admite enteros");
    }
  });
}

//Filtro especifico para el campo Precio(pueden ser enteros o decimales)
export function filtroPrecio(idElemento) {
  $(`${idElemento}`).focusout(() => {
    eliminaError(idElemento);
    if (filtroSoloNúmerosEnterosODecimales(idElemento)) {
      campoCorrecto(idElemento);
    } else if (!campoVacio(idElemento)) {
      adjuntaError(idElemento, "Este campo solo admite enteros o decimales");
    }
  });
}

/*Filtra devolviendo true si el campo que se le pasa solo contiene letras con espacios y tildes
devuelve false si no lo cumple*/
function filtroSoloLetras(idElemento) {
  var filtro = /^[a-zA-Zá-ýÁ-Ý\s]+$/;
  if ($(`${idElemento}`).val().match(filtro)) {
    return true;
  } else {
    return false;
  }
}

/*Filtra devolviendo true si el campo que se le pasa contiene una longitud de carácteres
menor a la indicada, devuelve false si es mayor*/
function filtroLongitud(idElemento, longitudRestriccion) {
  if ($(`${idElemento}`).val().length < longitudRestriccion) return true;
  return false;
}

//Devuelve true si el value del campo indicado sólo contiene enteros
function filtroSoloEnteros(idElemento) {
  let filtroEnteros = /^[0-9]+$/;
  if ($(`${idElemento}`).val().match(filtroEnteros)) {
    return true;
  } else {
    return false;
  }
}

//Devuelve true si el value del campo indicado contiene enteros o decimales
function filtroSoloNúmerosEnterosODecimales(idElemento) {
  let filtroEnteros = /^[0-9.]+$/;
  if ($(`${idElemento}`).val().match(filtroEnteros)) {
    return true;
  } else {
    return false;
  }
}

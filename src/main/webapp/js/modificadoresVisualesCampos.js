import { campoVacio } from "./compruebaCampos.js";
//Adjunta un mensaje de error junto con el borde en rojo al elemento que se le pase como parámetro
export function adjuntaError(idElemento, mensaje) {
  eliminaError(idElemento);
  $(`${idElemento}`)
    .after(`<div class="text-danger campoInvalido"> ${mensaje}</div>`)
    .css("border", "2px solid red");
}

//Elimina el error del campo especificado
export function eliminaError(idElemento) {
  $(`${idElemento}`).next().remove();
  $(`${idElemento}`).css("border", "1px solid #ced4da");
}

//Cambia el borde de color verde al campo que se le pase como parámetro
export function campoCorrecto(idElemento) {
  $(`${idElemento}`).css("border", "2px solid lightgreen");
  $(`${idElemento}`).next().remove();
}

export function vaciarCampos(comunCampos) {
  let listaCampos = $(`${comunCampos}`);
  for (let i = 0; i < listaCampos.length; i++) {
    if (!campoVacio("#" + $(listaCampos[i]).attr("id"))) {
      "#" + $(listaCampos[i]).val("");
    }
  }
}

import {devuelveArticulo} from "./AJAX.js";

export const rellenaCamposModificacion = (id) => {
  	devuelveArticulo(id).then((valores) =>{
  	  $("#nombreModificacion").val(valores.nombre);
      $("#descripcionModificacion").val(valores.descripcion);
      $("#precioModificacion").val(valores.precio);
      $("#stockModificacion").val(valores.existencia);
  	});
}
    


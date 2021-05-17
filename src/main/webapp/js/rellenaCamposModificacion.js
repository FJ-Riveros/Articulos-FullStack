//import { obtenerEntradas } from "./manipuladorJSON.js";
import {devuelveArticulo} from "./AJAX.js";

export const rellenaCamposModificacion = (id) => {
  	//let valores = devuelveArticulo(id);
  	
  	devuelveArticulo(id).then((data) =>{
  	console.log(data);
  	});
  	//setTimeout(console.log(valores[0]), 1000);
  	/*setTimeout(() =>{
  	  $("#nombreModificacion").val(valores.nombre);
      $("#descripcionModificacion").val(valores.descripcion);
      $("#precioModificacion").val(valores.precio);
      $("#stockModificacion").val(valores.existencia);
  	}, 200);*/
    }
    
    
    
    /*let nombreOriginal = $("#nombreModificacion"),
      descripcionOriginal = $("#descripcionModificacion"),
      precioOriginal = $("#precioModificacion"),
      stockOriginal = $("#stockModificacion");*/


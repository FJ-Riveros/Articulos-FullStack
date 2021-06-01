import {devuelveArticulo, addItemCarrito} from "./AJAX.js";
import {
  adjuntaError,
  eliminaError,
  campoCorrecto,
} from "./modificadoresVisualesCampos.js";

export async function addArticuloCarrito(id){
	$("#addArticuloCart").html();	
	let info = await devuelveArticulo(id);
	adjuntaContent(info);
	eventListennerInput(info);
	//Adjuntamos el cuerpo de la tarjeta
	function adjuntaContent(){
		let insertar = `
		<div class="modal-header">
          <h1 class="modal-title" id="exampleModalLabel">${info.nombre}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="mb-1">Cantidad</p>
	      <input type="number" class="w-25 inputAddCarrito mb-2">
          <p>${info.descripcion}</p>
		  <div class="align-between text-secondary">		
		    <p class="mb-0 font-weight-medium">${info.precio}€/Unidad<p>
		    <p class="mb-0 font-weight-medium">${info.existencia} Unidades disponibles<p>
           </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary cerrarArticulo" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" id="añadirArticuloCarrito">Añadir</button>
        </div>`;
		$("#addArticuloCart").html(insertar);
	}
	
	//Listenner para comprobar el número introducido del usuario
	function eventListennerInput(info){
		$("#añadirArticuloCarrito").click(async function (){	
			if($(".inputAddCarrito")[0].value > info.existencia){
			  adjuntaError(".inputAddCarrito", "No tenemos esa cantidad de producto")
			}else if($(".inputAddCarrito")[0].value <= 0){
			  adjuntaError(".inputAddCarrito", "Debes añadir algo al carrito")
			}else{
			  //LLamada AJAX para añadir el articulo en concreto al carrito
			  let insertCall = await addItemCarrito(info.id,$(".inputAddCarrito")[0].value);
			  $("#addArticuloCart").html(`<div class="mensajeAñadir"><i class="fas fa-check"></i><p>Articulo añadido al carrito</p><div>`);		
			  setTimeout(function(){
			    $("#modalArticulo").modal('hide');
			}, 1500);
			  eliminaError(".inputAddCarrito");
			  campoCorrecto(".inputAddCarrito");
			}
		});
	}
}
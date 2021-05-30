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
	      	<div class="row">
			  <div class="col-8">
                <p>${info.descripcion}</p>
			  </div>
			  <div class="col-4 alineacionRight">
                <input type="number" class="w-50 inputAddCarrito">
			  </div>
		  	</div>
		  <p class="mb-0">${info.precio}€/Unidad<p>
		  <p class="mb-0">${info.existencia} Unidades disponibles<p>
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
			  let insertCall = await addItemCarrito(info.id);
			  $("#addArticuloCart").html("<h1>Articulo añadido al carrito</h1>");		
			  setTimeout(function(){
			    $("#modalArticulo").modal('hide');
			}, 2000);
			  eliminaError(".inputAddCarrito");
			  campoCorrecto(".inputAddCarrito");
			}
		});
	}
}
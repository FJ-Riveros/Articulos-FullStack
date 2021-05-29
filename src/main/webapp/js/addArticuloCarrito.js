import {devuelveArticulo} from "./AJAX.js";

export async function addArticuloCarrito(id){	
	let info = await devuelveArticulo(id);
	adjuntaContent(info);
	function adjuntaContent(){
		//Convertir en form para mandar la request directamente
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
                <input type="number" class="w-50" value="1">
			  </div>
		  	</div>
		  <p class="mb-0">${info.precio}€/Unidad<p>
		  <p class="mb-0">${info.existencia} Unidades disponibles<p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary">Añadir</button>
        </div>`;
		$(".modal-content").html(insertar);
	}
}
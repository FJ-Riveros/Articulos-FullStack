import {devuelveArticulosCarrito, eliminaArticuloCarrito} from "./AJAX.js";

export let muestraCarrito = () =>{
	$("#carritoInsertar").empty();
	return new Promise(resolve =>{
	//Devuelve los artículos del carrito alojados en la BDD
  	devuelveArticulosCarrito().then(articulos=>{
  	$.each(articulos, (index, info) =>{
    	cuerpoCarrito(info);
		$(".eliminarArticuloCart").click(function(){
			eliminaArticuloCarrito($(this).parents(".card").attr("id"));	
		});
		
		$(".card-body").hover(function(){
			$(this).find("button").css("display", "unset");	
		}, function(){
			$(this).find("button").css("display", "none");
		});
 	 })
 	 resolve(true);
  })})
}
	
let cuerpoCarrito = (info) =>{
	let inner = `<div class="card w-75" id="${info.id}">
  	     		   <div class="card-body">
				     <div class="align-between" id="cabecera">
    	     	       <h5 class="card-title">${info.nombre}</h5>
					   <button type="button" class="btn-close eliminarArticuloCart"></button>
					 </div>
    		        <p class="card-text">${info.descripcion}</p>
    		        <div class="align-between"><p class="card-text">${info.precio}€/Unidad</p>
					  <p class="card-text">${info.existencia} Unidades</p>
					</div>
  		          </div>
			   </div>`

	$("#carritoInsertar").append(inner);
}
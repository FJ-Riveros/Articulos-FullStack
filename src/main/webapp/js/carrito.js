import {devuelveArticulosCarrito, eliminaArticuloCarrito} from "./AJAX.js";

 export async function muestraCarrito (){
	//Vaciamos el carrito 
	$("#carritoInsertar").empty();
	
  	//Devuelve los artículos del carrito alojados en la BDD
    let articulosCarrito = await devuelveArticulosCarrito();
	if(articulosCarrito.length != 0){
  	  $.each(articulosCarrito, (index, info) =>{
    	  cuerpoCarrito(info);
		  $(".eliminarArticuloCart").click(function(){
	        eliminaArticuloCarrito($(this).parents(".card").attr("id"));	
		  });
		
		  $(".card-body").hover(function(){
			$(this).find("button").css("display", "unset");	
		  }, function(){
			$(this).find("button").css("display", "none");
		  });
 	   });
	}else{
		$("#carritoInsertar").html("<p>El carrito está vacio, seleccione un artículo pulsando en '+'.</p>");
	}
}
	
let cuerpoCarrito = (info) =>{
	let inner = `<div class="card w-75 cuerpoArticuloCarrito shadow" id="${info.id}">
  	     		   <div class="card-body">
				     <div class="align-between" id="cabecera">
    	     	       <h5 class="card-title">${info.nombre}</h5>
					   <button type="button" class="btn-close eliminarArticuloCart"></button>
					 </div>
    		        <p class="card-text">${info.descripcion}</p>
    		        <div class="align-between text-secondary font-weight-medium">
					  ${info.precio}€/Unidad</p>
					  <p class="card-text font-weight-medium">${info.existencia} Unidades</p>
					</div>
					<p class="card-text font-weight-medium mt-2">Subtotal ${info.existencia * info.precio}€</p>
  		          </div>
			   </div>`

	$("#carritoInsertar").append(inner);
}